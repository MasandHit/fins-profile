import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Effective Date: April 2026</p>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <p>
            FinSeek AI ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect,
            use, and protect your information when you use our website, application, and related services (the "Service").
            By using the Service, you agree to this Privacy Policy.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <h3 className="text-base font-medium text-gray-200 mb-2">a. Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-gray-300">
              <li>Email address (for account creation, waitlist registration, or communication)</li>
              <li>Account information such as your display name</li>
              <li>Financial transaction data you upload or connect through the application</li>
              <li>Feedback and support messages you submit</li>
            </ul>
            <h3 className="text-base font-medium text-gray-200 mb-2">b. Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Device type and browser</li>
              <li>IP address (approximate location)</li>
              <li>Usage data (pages visited, features used, interactions)</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Provide and improve the Service</li>
              <li>Display your financial dashboard, generate AI insights, and detect subscriptions</li>
              <li>Analyze usage and enhance user experience</li>
              <li>Communicate updates, product news, or early access opportunities</li>
            </ul>
            <p className="text-gray-200">
              We do not sell your personal data. We do not use your data to train external AI models.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Bank Statement Files and Financial Data</h2>
            <p className="mb-3">
              We do not store your raw bank statement files. When you upload a statement, it is processed
              in memory to extract transaction data, then immediately discarded. Only the extracted
              transactions (date, merchant, amount, category) are stored in our encrypted database.
            </p>
            <p>
              When your transaction data is sent to our AI provider to generate your personal insights,
              identifying details such as account numbers, reference IDs, ACH names, email addresses,
              and phone numbers are masked at the application layer first.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing and Third-Party Providers</h2>
            <p className="mb-4">
              We do not sell or rent your personal data. To operate the Service, we share limited data
              with the following providers:
            </p>
            <ul className="space-y-3">
              {[
                ["Supabase", "Database hosting and authentication. Stores your account and transaction data, encrypted at rest."],
                ["Groq", "AI processing. Receives masked transaction summaries to generate your insights. Does not retain or train on your data."],
                ["Vercel and Render", "Application hosting. Processes requests but does not store your financial data."],
                ["Plaid", "Bank account connection provider. Only used if you choose to connect a bank account."],
                ["Resend", "Transactional email provider (account verification, password reset)."],
              ].map(([name, desc]) => (
                <li key={name} className="flex gap-2">
                  <span className="text-white font-medium min-w-fit">{name} —</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">We may also disclose data when required by law.</p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="mb-3">
              All data is encrypted in transit (TLS 1.2 or higher) and at rest. Row-level security ensures
              your data is only accessible by your authenticated account. Plaid access tokens are additionally
              encrypted at the application layer using AES-256-GCM. We use industry-standard infrastructure providers.
            </p>
            <p className="text-gray-400 text-sm">
              No system is completely secure. You provide data at your own risk.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Your transaction and account data is retained until you delete it. You may delete individual
                statements, all data, or your entire account from the in-app Profile page. Deletion is immediate and permanent.
              </li>
              <li>
                Anonymized usage logs and AI interaction records used to improve the Service are retained for up to 12 months.
              </li>
              <li>
                Database backups are retained by our infrastructure provider for up to 7 days.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Your Rights</h2>
            <p className="mb-3">You may:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Access your data at any time through the in-app interface</li>
              <li>Delete individual data, categories of data, or your entire account from the Profile page</li>
              <li>Withdraw consent by disconnecting linked accounts and/or deleting your FinSeek account</li>
            </ul>
            <p>
              To exercise these rights or ask questions, contact us using the in-app feedback button.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Cookies and Tracking</h2>
            <p>
              We use essential cookies only for authentication sessions. We do not use advertising trackers
              or sell browsing data. You can disable cookies through your browser settings, though some
              Service features may not work as expected.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Children's Privacy</h2>
            <p>
              The Service is not intended for anyone under 18. We do not knowingly collect data from minors.
              If you believe a minor has created an account, contact us and we will delete it.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. International Users</h2>
            <p>
              The Service is operated from the United States and your data is processed and stored on servers
              located in the US. By using the Service, you consent to this transfer.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Business Changes</h2>
            <p>
              FinSeek AI may transition into an LLC or Corporation, or may merge, acquire, or be acquired.
              In such cases, user data may be transferred as part of the business assets, subject to this
              Privacy Policy or a successor policy of substantively equivalent protection.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">12. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy as the Service evolves. Material changes will be communicated
              in-app or by email, and the updated effective date will be posted at the top of this page.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">13. Contact Us</h2>
            <p>
              For privacy questions or data requests, use the in-app feedback button or reach us at{" "}
              <a href="mailto:privacy@finseekai.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                privacy@finseekai.com
              </a>.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">14. Consent</h2>
            <p>
              By using the Service, you consent to this Privacy Policy and the collection and use of your
              information as described.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex gap-6 text-sm text-gray-500">
          <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
        </div>

      </div>
    </div>
  );
}