import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
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
          <h1 className="text-4xl font-bold mb-3">Terms and Conditions</h1>
          <p className="text-gray-400 text-sm">Effective Date: April 2026</p>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <p>
            Welcome to FinSeek AI ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your
            access to and use of our website, application, and related services (collectively, the "Service").
            By accessing or using our Service, you agree to these Terms. You must be at least 18 years old
            to use the Service. If you do not agree, please do not use the Service.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Nature of Service</h2>
            <p className="mb-3">
              FinSeek AI is an AI-powered financial insights platform designed to help users better understand
              their financial data. The Service is currently in a public beta phase and is provided for testing,
              educational, and informational purposes only. Features may be added, modified, or removed during
              the beta period.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. No Financial Advice</h2>
            <p className="mb-3">The information provided by FinSeek AI:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Does not constitute financial, investment, legal, or tax advice</li>
              <li>Should not be relied upon for making financial decisions</li>
              <li>Is generated in part using automated systems (AI models) and may be inaccurate or incomplete</li>
            </ul>
            <p className="mb-2">You agree that:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>You are solely responsible for your financial decisions</li>
              <li>We strongly recommend consulting a qualified financial professional before making any financial decisions</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. User Responsibility</h2>
            <p className="mb-3">By using this Service, you agree that:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>You will use the platform at your own risk</li>
              <li>You are responsible for verifying any insights or outputs</li>
              <li>You will not rely solely on the Service for financial planning</li>
              <li>You will not upload data you are not authorized to share</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Your Data</h2>
            <p>
              You retain ownership of the data you upload or connect. We do not store your raw bank statement
              files — they are processed in memory to extract transaction data, then immediately discarded.
              Only extracted transaction data is stored, secured, and accessible only by your authenticated account.
              You may delete individual statements, all data, or your entire account at any time from the Profile page.
              See our{" "}
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to misuse the Service, including:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Attempting to access other users' data</li>
              <li>Uploading malicious files</li>
              <li>Reverse engineering or exploiting the platform</li>
              <li>Using the Service for any illegal or unauthorized purpose</li>
              <li>Attempting to bypass rate limits or authentication controls</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Bank Account Connection</h2>
            <p className="mb-3">If you connect a bank account through the Service (via Plaid), you:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Authorize us to fetch transaction history from that account through Plaid</li>
              <li>Understand that access tokens are encrypted and stored securely</li>
              <li>May disconnect your bank at any time from the Profile page, which revokes the connection with your financial institution</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p className="mb-3">
              To the fullest extent permitted by U.S. law, FinSeek AI and its founders, affiliates, and
              contributors shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Any financial losses</li>
              <li>Incorrect insights or recommendations</li>
              <li>Data inaccuracies</li>
              <li>Decisions made based on the Service</li>
              <li>Any direct, indirect, incidental, or consequential damages arising from your use of the Service</li>
            </ul>
            <p>Your use of the Service is entirely at your own risk.</p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. No Guarantees</h2>
            <p className="mb-3">We make no guarantees regarding:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Accuracy of financial insights</li>
              <li>Completeness of data received from financial institutions</li>
              <li>Future financial outcomes</li>
              <li>System uptime or availability during the beta period</li>
            </ul>
            <p>The Service is provided "AS IS" and "AS AVAILABLE."</p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Intellectual Property</h2>
            <p className="mb-3">
              All content, branding, and technology related to FinSeek AI are owned by the company (or its
              founders in the pre-incorporation phase) unless otherwise stated. You may not:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Copy, reproduce, or distribute the platform</li>
              <li>Reverse engineer or exploit the system</li>
              <li>Use the Service for illegal or unauthorized purposes</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Future Changes to Business Structure</h2>
            <p>
              FinSeek AI may transition its legal structure (for example, incorporating as an LLC or C-Corporation)
              or merge, acquire, or be acquired. These Terms and all rights and obligations hereunder will
              automatically transfer to the new legal entity upon such change.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Material changes will be communicated
              in-app or by email. Continued use of the Service after changes constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">12. Termination</h2>
            <p>
              We may suspend or terminate access to the Service at any time without notice for any reason,
              including misuse. You may terminate your use of the Service at any time by deleting your account
              from the Profile page.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted under the laws of the United States and the
              State in which the company is registered (to be updated upon incorporation).
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">14. Contact</h2>
            <p>
              For questions regarding these Terms, use the in-app feedback button or contact us at{" "}
              <a href="mailto:privacy@finseekai.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                privacy@finseekai.com
              </a>.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">15. Acknowledgment</h2>
            <p className="mb-2">By using this Service, you acknowledge that:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>You understand this Service uses AI systems that may produce inaccurate or incomplete outputs</li>
              <li>You assume full responsibility for your financial decisions</li>
              <li>You agree not to hold FinSeek AI or its founders liable for any outcomes based on your use of the Service</li>
            </ul>
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