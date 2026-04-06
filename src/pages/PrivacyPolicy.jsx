import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <nav className="border-b border-border/50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground">FinSeek AI</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Effective Date: April 2026</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <p>
            FinSeek AI ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect,
            use, and protect your information when you use our website, prototype application, and related services
            (the "Service"). By using the Service, you agree to this Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <h3 className="text-base font-medium text-foreground mb-2">a. Information You Provide</h3>
            <p className="mb-3">We may collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Email address (for pre-registration or communication)</li>
              <li>Any data you voluntarily input (e.g., financial data, transactions, or notes)</li>
            </ul>
            <h3 className="text-base font-medium text-foreground mb-2">b. Automatically Collected Information</h3>
            <p className="mb-3">We may collect limited technical data such as:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Device type and browser</li>
              <li>IP address (approximate location)</li>
              <li>Basic usage data (pages visited, interactions)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Provide and improve the Service</li>
              <li>Analyze usage and enhance user experience</li>
              <li>Generate AI-based financial insights</li>
              <li>Communicate updates, product news, or early access opportunities</li>
            </ul>
            <p className="font-medium text-foreground">We do not sell your personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Financial Data Disclaimer</h2>
            <p className="mb-3">If you provide financial information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>It is used solely to generate insights within the platform</li>
              <li>It may be processed by automated systems (AI models)</li>
              <li>It may not be permanently stored</li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="text-foreground font-medium">Important:</p>
              <p>This is an early-stage prototype, and security measures may not yet meet full production standards.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Sharing</h2>
            <p className="mb-3">We do not sell or rent your personal data. We may share limited data with:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Service providers (e.g., hosting, analytics tools)</li>
              <li>Future business entities if the company is incorporated or acquired</li>
            </ul>
            <p>All sharing is limited to what is necessary to operate the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="mb-3">We take reasonable steps to protect your data. However:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>No system is completely secure</li>
              <li>The Service is in a prototype stage</li>
              <li>You provide data at your own risk</li>
            </ul>
            <p>We recommend avoiding submission of highly sensitive financial information during this stage.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p className="mb-3">We may retain your information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>For as long as necessary to operate the Service</li>
              <li>Until you request deletion</li>
              <li>Or until systems are updated or reset during development</li>
            </ul>
            <p>We reserve the right to delete data at any time during this early phase.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Opt out of communications</li>
            </ul>
            <p>To exercise these rights, contact us at: <a href="mailto:fintechainewyork@gmail.com" className="text-primary hover:underline">fintechainewyork@gmail.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
            <p className="mb-3">We may use basic cookies or analytics tools to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Understand user behavior</li>
              <li>Improve performance</li>
            </ul>
            <p>You can disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="mb-2">This Service is not intended for individuals under 18.</p>
            <p>We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Business Changes</h2>
            <p className="mb-3">FinSeek AI may:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Transition into an LLC or Corporation</li>
              <li>Merge, acquire, or be acquired</li>
            </ul>
            <p>In such cases, user data may be transferred as part of the business assets.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Updates to This Policy</h2>
            <p>We may update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, contact:</p>
            <p className="mt-2">Email: <a href="mailto:fintechainewyork@gmail.com" className="text-primary hover:underline">fintechainewyork@gmail.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Consent</h2>
            <p>By using the Service, you consent to this Privacy Policy and the collection and use of your information as described.</p>
          </section>

          <div className="border-t border-border/50 pt-8">
            <p className="text-sm text-muted-foreground/60 italic">End of Privacy Policy</p>
          </div>

        </div>
      </div>

      <footer className="border-t border-border/50 py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} FinSeek AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-primary">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}