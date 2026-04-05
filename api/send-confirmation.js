export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic origin check — update with your actual Vercel URL after deploy
  const allowedOrigins = [
    'http://localhost:5173',
    'https://fins-profile.vercel.app/', // update this after deploy
  ];
  const origin = req.headers.origin;
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const { email } = req.body;

  // Validate email server-side too
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`,
        to: [email],
        subject: "You're on the FinSight Copilot waitlist!",
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; background: #0f1117; color: #ffffff; padding: 40px; border-radius: 16px;">
            <div style="margin-bottom: 24px;">
              <span style="font-size: 24px; font-weight: 800; color: #ffffff;">Fin</span><span style="font-size: 24px; font-weight: 800; color: #3b82f6;">Sight</span>
            </div>
            <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 12px;">You're on the list! 🎉</h1>
            <p style="color: #94a3b8; line-height: 1.6; margin-bottom: 24px;">
              Thanks for joining the FinSight Copilot early access waitlist. You'll be among the first to know when we launch.
            </p>
            <div style="background: #1e2433; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0;">Early members get:</p>
              <ul style="color: #ffffff; font-size: 14px; margin: 12px 0 0 0; padding-left: 20px; line-height: 2;">
                <li>First access to test everything</li>
                <li>Founding member pricing</li>
                <li>Direct input on features</li>
              </ul>
            </div>
            <p style="color: #64748b; font-size: 12px;">© 2026 FinSight Copilot. All rights reserved.</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Email failed to send' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}