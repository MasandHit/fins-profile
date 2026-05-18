import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

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

async function checkAlreadyRegistered(email) {
  const q = query(collection(db, 'waitlist'), where('email', '==', email));
  const snapshot = await getDocs(q);
  return !snapshot.empty;
}

async function sendConfirmationEmail(email, honeypot) {
  try {
    await fetch('/api/send-confirmation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, website: honeypot }),
    });
  } catch (err) {
    console.error('Confirmation email failed:', err);
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

  // Check if already registered
  const alreadyRegistered = await checkAlreadyRegistered(cleanEmail);
  if (alreadyRegistered) {
    throw new Error('This email is already on the waitlist!');
  }

  // Save to Firestore
  await addDoc(collection(db, 'waitlist'), {
    email: cleanEmail,
    plan_interest: planInterest,
    joined_at: new Date().toISOString(),
    user_agent: navigator.userAgent.substring(0, 200),
    email_sent: false,
  });

  // Send confirmation — non blocking
  sendConfirmationEmail(cleanEmail, honeypot);
}