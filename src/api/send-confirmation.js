import admin from 'firebase-admin';

// Init Firebase Admin once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

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

async function isAlreadyInAudience(emailAddress) {
  try {
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts/${emailAddress}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function addToAudience(emailAddress) {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) return;
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
  const unsubscribeUrl = `https://finseekai.com/unsubscribe?email=${encodeURIComponent(emailAddress)}`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${process.env.RESEND_SENDER_NAME} <${process.env.RESEND_SENDER_EMAIL}>`,
      to: [emailAddress],
      subject: "You're on the FinSeek AI waitlist! 🎉",
      headers: {
        'List-Unsubscribe': `<${unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto; background: #08090D; color: #ffffff; padding: 48px 40px; border-radius: 20px; border: 0.5px solid rgba(255,255,255,0.09);">
          
          <div style="margin-bottom: 32px;">
            <span style="font-size: 20px; font-weight: 700; background: linear-gradient(90deg, #3B6EF8, #60CFFF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">FinSeek AI</span>
          </div>

          <h1 style="font-size: 26px; font-weight: 700; margin-bottom: 12px; color: #ffffff;">You're on the list! 🎉</h1>
          
          <p style="color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 28px; font-size: 15px;">
            Thanks for joining the FinSeek AI early access waitlist. You'll be among the first to know when we launch — and you'll get founding member pricing.
          </p>

          <div style="background: rgba(59,110,248,0.08); border: 0.5px solid rgba(59,110,248,0.25); border-radius: 14px; padding: 24px; margin-bottom: 28px;">
            <p style="color: #60CFFF; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.08em;">Early members get</p>
            <ul style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 0; padding-left: 20px; line-height: 2.2;">
              <li>First access before public launch</li>
              <li>Founding member pricing — locked in forever</li>
              <li>Direct input on features we build</li>
            </ul>
          </div>

          <p style="color: rgba(255,255,255,0.4); font-size: 12px; line-height: 1.6; margin-bottom: 8px;">
            You're receiving this because you signed up at finseekai.com. 
            If you'd like to unsubscribe, <a href="${unsubscribeUrl}" style="color: #60CFFF;">click here</a>.
          </p>
          
          <p style="color: rgba(255,255,255,0.2); font-size: 11px;">© 2026 FinSeek AI. All rights reserved.</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    console.error('Resend email error:', err);
    throw new Error('Email send failed');
  }
}

async function markEmailSent(emailAddress) {
  try {
    const db = admin.firestore();
    const snapshot = await db.collection('waitlist')
      .where('email', '==', emailAddress)
      .limit(1)
      .get();
    if (!snapshot.empty) {
      await snapshot.docs[0].ref.update({ email_sent: true });
    }
  } catch (err) {
    console.error('Failed to mark email sent:', err);
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
    // Check if already in audience — skip welcome email if so
    const alreadyInAudience = await isAlreadyInAudience(cleanEmail);

    // Always add to audience (updates existing contact if already there)
    await addToAudience(cleanEmail);

    // Only send welcome email if new
    if (!alreadyInAudience) {
      await sendConfirmationEmail(cleanEmail);
      await markEmailSent(cleanEmail);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}