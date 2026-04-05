import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navbar */}
      <nav className="border-b border-border/50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground">FinSight Copilot</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Welcome to FinSight Copilot ("we", "our", "us"). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you visit our website or join our waitlist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect only the minimum information necessary:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><span className="text-foreground font-medium">Email address</span> — when you join our waitlist</li>
              <li><span className="text-foreground font-medium">Plan interest</span> — which tier you expressed interest in (Basic or Pro)</li>
              <li><span className="text-foreground font-medium">Timestamp</span> — when you joined the waitlist</li>
              <li><span className="text-foreground font-medium">Browser info</span> — basic user agent string for security purposes</li>
            </ul>
            <p className="mt-3">
              We do not collect any financial data, bank account information, or personal identification
              at this stage. FinSight Copilot is currently in pre-launch.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">Your information is used solely to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Notify you when FinSight Copilot launches</li>
              <li>Send you early access invitations</li>
              <li>Share product updates and announcements relevant to your waitlist position</li>
              <li>Prevent duplicate or fraudulent signups</li>
            </ul>
            <p className="mt-3">
              We will never sell, rent, or share your email with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Storage</h2>
            <p>
              Your waitlist data is stored securely using Google Firebase Firestore, hosted on Google
              Cloud infrastructure. Firebase is compliant with GDPR, SOC 2, and ISO 27001 standards.
              Your data is stored in the United States.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Email Communications</h2>
            <p>
              Confirmation and update emails are sent via Resend. By joining the waitlist, you consent
              to receiving transactional emails related to FinSight Copilot's launch. You can unsubscribe
              at any time by replying to any email with "unsubscribe" in the subject line, or by
              contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request deletion of your data from our waitlist</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies</h2>
            <p>
              This website does not currently use cookies or any tracking technologies beyond what is
              strictly necessary to deliver the page. We do not use analytics, advertising, or
              third-party tracking scripts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as FinSight Copilot evolves. We will notify waitlist
              members of any significant changes via email. Continued use of the site after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or want to exercise your data rights,
              please contact us at{' '}
              <a href="mailto:fintechainewyork@gmail.com" className="text-primary hover:underline">fintechainewyork@gmail.com</a>
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FinSight Copilot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-primary">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}