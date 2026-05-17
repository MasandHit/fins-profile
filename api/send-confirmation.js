const ipAttempts = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxAttempts = 5;
  const attempts = (ipAttempts.get(ip) || []).filter(t => now - t < windowMs);
  ipAttempts.set(ip, attempts);
  if (attempts.length >= maxAttempts) return true;
  attempts.push(now);
  ipAttempts.set(ip, attempts);
  return false;
}

async function addToAudience(emailAddress) {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    console.warn('RESEND_AUDIENCE_ID not set');
    return;
  }
  const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailAddress,
      unsubscribed: false,
    }),
  });
  if (!response.ok) {
    const err = await response.json();
    console.error('Resend audience error:', err);
  }
}

async function sendConfirmationEmail(emailAddress) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${process.env.RESEND_SENDER_NAME} <${process.env.RESEND_SENDER_EMAIL}>`,
      to: [emailAddress],
      subject: "You're on the FinSeek AI waitlist!",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; background: #0f1117; color: #ffffff; padding: 40px; border-radius: 16px;">
          <div style="margin-bottom: 24px;">
            <span style="font-size: 24px; font-weight: 800; color: #ffffff;">Fin</span><span style="font-size: 24px; font-weight: 800; color: #3b82f6;">Seek AI</span>
          </div>
          <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 12px;">You're on the list! 🎉</h1>
          <p style="color: #94a3b8; line-height: 1.6; margin-bottom: 24px;">
            Thanks for joining the FinSeek AI early access waitlist. You'll be among the first to know when we launch.
          </p>
          <div style="background: #1e2433; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #94a3b8; font-size: 14px; margin: 0;">Early members get:</p>
            <ul style="color: #ffffff; font-size: 14px; margin: 12px 0 0 0; padding-left: 20px; line-height: 2;">
              <li>First access to test everything</li>
              <li>Founding member pricing</li>
              <li>Direct input on features</li>
            </ul>
          </div>
          <p style="color: #94a3b8; font-size: 13px; margin-bottom: 8px;">
            You can unsubscribe at any time by replying with "unsubscribe" in the subject.
          </p>
          <p style="color: #64748b; font-size: 12px;">© 2026 FinSeek AI. All rights reserved.</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    console.error('Resend email error:', err);
  }
}

export default async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const allowedOrigins = [
    'https://finseekai.com',
    'https://www.finseekai.com',
    'http://localhost:5173',
  ];
  const origin = req.headers.origin;
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { email: emailAddress, website } = req.body;

  // Honeypot
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (
    !emailAddress ||
    typeof emailAddress !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) ||
    emailAddress.length < 5 ||
    emailAddress.length > 200
  ) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const cleanEmail = emailAddress.trim().toLowerCase();

  try {
    await Promise.all([
      sendConfirmationEmail(cleanEmail),
      addToAudience(cleanEmail),
    ]);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}