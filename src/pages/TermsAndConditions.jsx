import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing this website or joining the FinSight Copilot waitlist, you agree to be
              bound by these Terms and Conditions. If you do not agree, please do not use this site
              or submit your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Pre-Launch Status</h2>
            <p>
              FinSight Copilot is currently in pre-launch development. This website is an informational
              landing page only. Joining the waitlist does not constitute a purchase, subscription, or
              guarantee of access to any product or service. Features, pricing, and availability are
              subject to change.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Waitlist</h2>
            <p className="mb-3">By joining the waitlist you acknowledge that:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>You are providing your email voluntarily</li>
              <li>Joining does not guarantee early access or any specific launch date</li>
              <li>We reserve the right to limit, pause, or cancel early access at any time</li>
              <li>Waitlist positions are not transferable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, and
              design, is the property of FinSight Copilot and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create derivative works without
              our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Disclaimer of Warranties</h2>
            <p>
              This website and its contents are provided "as is" without warranty of any kind,
              express or implied. We do not warrant that the site will be uninterrupted, error-free,
              or free of viruses or other harmful components. FinSight Copilot is a financial
              management tool and does not constitute financial advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, FinSight Copilot shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of this website or the waitlist service, even if we have been advised of the
              possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Financial Disclaimer</h2>
            <p>
              FinSight Copilot is a personal finance management and analytics tool. It is not a
              licensed financial advisor, broker, or investment service. Any insights, analysis,
              or suggestions provided by the app are for informational purposes only and should
              not be construed as financial, investment, or legal advice. Always consult a
              qualified professional for financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws.
              Any disputes arising under these Terms shall be subject to the exclusive jurisdiction
              of the competent courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on
              this page with an updated date. Your continued use of the site after any changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at{' '}
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
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}