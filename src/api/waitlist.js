import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;
const SENDER_EMAIL = import.meta.env.VITE_RESEND_SENDER_EMAIL;
const SENDER_NAME = import.meta.env.VITE_RESEND_SENDER_NAME;

const submitAttempts = new Map();

function isRateLimited(email) {
  const now = Date.now();
  const attempts = (submitAttempts.get(email) || []).filter(t => now - t < 60 * 60 * 1000);
  submitAttempts.set(email, attempts);
  return attempts.length >= 3;
}

function trackAttempt(email) {
  const attempts = submitAttempts.get(email) || [];
  attempts.push(Date.now());
  submitAttempts.set(email, attempts);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length < 200;
}

async function sendConfirmationEmail(email) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
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
            <p style="color: #64748b; font-size: 12px;">
              © 2026 FinSight Copilot. All rights reserved.
            </p>
          </div>
        `,
      }),
    });
    if (!response.ok) {
      const err = await response.json();
      console.error('Resend error:', err);
    }
  } catch (err) {
    console.error('Email send failed:', err);
  }
}

export async function joinWaitlist(email, planInterest = 'pro') {
  const cleanEmail = email.trim().toLowerCase();

  if (!isValidEmail(cleanEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  if (isRateLimited(cleanEmail)) {
    throw new Error('Too many attempts. Please try again later.');
  }

  trackAttempt(cleanEmail);

  await addDoc(collection(db, 'waitlist'), {
    email: cleanEmail,
    plan_interest: planInterest,
    joined_at: new Date().toISOString(),
    user_agent: navigator.userAgent.substring(0, 200),
  });

  sendConfirmationEmail(cleanEmail);
}