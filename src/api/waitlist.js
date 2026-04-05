import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

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
    await fetch('/api/send-confirmation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
  } catch (err) {
    console.error('Confirmation email failed:', err);
    // Non-blocking — don't throw
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
