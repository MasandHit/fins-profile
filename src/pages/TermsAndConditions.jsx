import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <nav className="border-b border-border/50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="FinSeek AI" className="w-8 h-8 rounded-lg" />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Effective Date: April 2026</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <p>
            Welcome to FinSeek AI ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your
            access to and use of our website, prototype application, and related services (collectively, the "Service").
            By accessing or using our Service, you agree to these Terms. If you do not agree, please do not use the Service.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Nature of Service</h2>
            <p className="mb-3">
              FinSeek AI is an experimental, AI-powered financial insights platform designed to help users
              better understand their financial data.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="text-foreground font-medium">Important:</p>
              <p>The Service is currently in a prototype / pre-release stage and is provided for testing,
              educational, and informational purposes only.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. No Financial Advice</h2>
            <p className="mb-3">The information provided by FinSeek AI:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Does not constitute financial, investment, legal, or tax advice</li>
              <li>Should not be relied upon for making financial decisions</li>
              <li>Is generated using automated systems and may be inaccurate or incomplete</li>
            </ul>
            <p className="mb-2">You agree that:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>You are solely responsible for your financial decisions</li>
              <li>We strongly recommend consulting a qualified financial professional before making any financial decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. User Responsibility</h2>
            <p className="mb-3">By using this Service, you agree that:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>You will use the platform at your own risk</li>
              <li>You are responsible for verifying any insights or outputs</li>
              <li>You will not rely solely on the Service for financial planning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Limitation of Liability</h2>
            <p className="mb-3">To the fullest extent permitted by U.S. law, FinSeek AI and its founders, affiliates, and contributors shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Any financial losses</li>
              <li>Incorrect insights or recommendations</li>
              <li>Data inaccuracies</li>
              <li>Decisions made based on the Service</li>
              <li>Any direct, indirect, incidental, or consequential damages</li>
            </ul>
            <p className="font-medium text-foreground">Your use of the Service is entirely at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. No Guarantees</h2>
            <p className="mb-3">We make no guarantees regarding:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Accuracy of financial insights</li>
              <li>Completeness of data</li>
              <li>Future financial outcomes</li>
              <li>System uptime or availability</li>
            </ul>
            <p className="font-medium text-foreground">The Service is provided "AS IS" and "AS AVAILABLE."</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Usage (Prototype Stage)</h2>
            <p className="mb-3">At this stage, we may collect limited information such as:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Email addresses (for pre-registration)</li>
              <li>Basic usage data</li>
              <li>Uploaded or manually entered financial data (if applicable)</li>
            </ul>
            <p className="mb-3">By using the Service, you agree that:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>You have the right to provide any data you submit</li>
              <li>You understand this is an early-stage system</li>
              <li>Data handling practices may evolve as the product develops</li>
            </ul>
            <p>We do not guarantee permanent storage or security at this stage.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
            <p className="mb-3">All content, branding, and technology related to FinSeek AI are owned by the founders unless otherwise stated. You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Copy, reproduce, or distribute the platform</li>
              <li>Reverse engineer or exploit the system</li>
              <li>Use the Service for illegal or unauthorized purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Future Changes to Business Structure</h2>
            <p className="mb-3">FinSeek AI is currently in a pre-incorporation stage and may:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>Transition into a Limited Liability Company (LLC) or Corporation (C-Corp)</li>
              <li>Update legal ownership and structure</li>
            </ul>
            <p>These Terms will automatically transfer to the new legal entity upon formation.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Continued use of the Service means you accept the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Termination</h2>
            <p>We may suspend or terminate access to the Service at any time without notice for any reason, including misuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Governing Law</h2>
            <p>These Terms shall be governed by and interpreted under the laws of the United States and the State in which the company is registered (to be updated upon incorporation).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact</h2>
            <p>For questions regarding these Terms, contact:</p>
            <p className="mt-2">Email: <a href="mailto:fintechainewyork@gmail.com" className="text-primary hover:underline">fintechainewyork@gmail.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Acknowledgment</h2>
            <p className="mb-3">By using this Service, you acknowledge that:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>You understand this is an experimental AI system</li>
              <li>You assume full responsibility for your financial decisions</li>
              <li>You agree not to hold FinSeek AI or its founders liable for any outcomes</li>
            </ul>
          </section>

          <div className="border-t border-border/50 pt-8">
            <p className="text-sm text-muted-foreground/60 italic">End of Terms and Conditions</p>
          </div>

        </div>
      </div>

      <footer className="border-t border-border/50 py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} FinSeek AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}