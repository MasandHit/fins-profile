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

async function sendConfirmationEmail(email, honeypot) {
  try {
    const response = await fetch('/api/send-confirmation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, website: honeypot }),
    });
    const data = await response.json();
    if (response.status === 409) {
      throw new Error('This email is already on the waitlist!');
    }
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong.');
    }
  } catch (err) {
    throw err;
  }
}

export async function joinWaitlist(email, planInterest = 'pro', honeypot = '') {
  if (honeypot) return;

  const cleanEmail = email.trim().toLowerCase();

  if (!isValidEmail(cleanEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  if (isRateLimited(cleanEmail)) {
    throw new Error('Too many attempts. Please try again later.');
  }

  trackAttempt(cleanEmail);

  // Save to Firestore — exactly 4 fields to match rules
  await addDoc(collection(db, 'waitlist'), {
    email: cleanEmail,
    plan_interest: planInterest,
    joined_at: new Date().toISOString(),
    user_agent: navigator.userAgent.substring(0, 200),
  });

  // Duplicate check and email handled server-side
  await sendConfirmationEmail(cleanEmail, honeypot);
}