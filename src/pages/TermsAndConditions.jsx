import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Background from '@/components/layout/Background';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen font-inter relative">
      <Background />

      {/* Fixed Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)' }}
            >
              F
            </div>
            <span className="text-sm font-medium grad-text">FinSeek AI</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        className="relative z-10"
        style={{ paddingTop: '100px', paddingBottom: '60px', overflowY: 'auto', minHeight: '100vh' }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-card p-10" style={{ border: '0.5px solid rgba(255,255,255,0.9)' }}>
            {/* Title */}
            <div className="mb-10 pb-6" style={{ borderBottom: '0.5px solid rgba(255,255,255,1)' }}>
              <div className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#60CFFF' }}>
                Legal
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
              <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,1)' }}>Effective Date: April 2026</p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>

              <p>Welcome to FinSeek AI ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website, prototype application, and related services (collectively, the "Service"). By accessing or using our Service, you agree to these Terms. If you do not agree, please do not use the Service.</p>

              {[
                {
                  title: '1. Nature of Service',
                  content: (<><p className="mb-3">FinSeek AI is an experimental, AI-powered financial insights platform designed to help users better understand their financial data.</p><div className="rounded-xl p-4" style={{ background: 'rgba(59,110,248,0.08)', border: '0.5px solid rgba(59,110,248,0.25)' }}><p className="font-semibold mb-1" style={{ color: '#60CFFF' }}>Important:</p><p>The Service is currently in a prototype / pre-release stage and is provided for testing, educational, and informational purposes only.</p></div></>)
                },
                {
                  title: '2. No Financial Advice',
                  content: (<><p className="mb-2">The information provided by FinSeek AI:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Does not constitute financial, investment, legal, or tax advice</li><li>Should not be relied upon for making financial decisions</li><li>Is generated using automated systems and may be inaccurate or incomplete</li></ul><p className="mb-2">You agree that:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>You are solely responsible for your financial decisions</li><li>We strongly recommend consulting a qualified financial professional before making any financial decisions</li></ul></>)
                },
                {
                  title: '3. User Responsibility',
                  content: (<><p className="mb-2">By using this Service, you agree that:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>You will use the platform at your own risk</li><li>You are responsible for verifying any insights or outputs</li><li>You will not rely solely on the Service for financial planning</li></ul></>)
                },
                {
                  title: '4. Limitation of Liability',
                  content: (<><p className="mb-2">To the fullest extent permitted by U.S. law, FinSeek AI and its founders, affiliates, and contributors shall not be liable for:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Any financial losses</li><li>Incorrect insights or recommendations</li><li>Data inaccuracies</li><li>Decisions made based on the Service</li><li>Any direct, indirect, incidental, or consequential damages</li></ul><p className="font-semibold text-white">Your use of the Service is entirely at your own risk.</p></>)
                },
                {
                  title: '5. No Guarantees',
                  content: (<><p className="mb-2">We make no guarantees regarding:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Accuracy of financial insights</li><li>Completeness of data</li><li>Future financial outcomes</li><li>System uptime or availability</li></ul><p className="font-semibold text-white">The Service is provided "AS IS" and "AS AVAILABLE."</p></>)
                },
                {
                  title: '6. Data Usage (Prototype Stage)',
                  content: (<><p className="mb-2">At this stage, we may collect limited information such as:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Email addresses (for pre-registration)</li><li>Basic usage data</li><li>Uploaded or manually entered financial data (if applicable)</li></ul><p className="mb-2">By using the Service, you agree that:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>You have the right to provide any data you submit</li><li>You understand this is an early-stage system</li><li>Data handling practices may evolve as the product develops</li></ul><p>We do not guarantee permanent storage or security at this stage.</p></>)
                },
                {
                  title: '7. Intellectual Property',
                  content: (<><p className="mb-2">All content, branding, and technology related to FinSeek AI are owned by the founders unless otherwise stated. You may not:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>Copy, reproduce, or distribute the platform</li><li>Reverse engineer or exploit the system</li><li>Use the Service for illegal or unauthorized purposes</li></ul></>)
                },
                {
                  title: '8. Future Changes to Business Structure',
                  content: (<><p className="mb-2">FinSeek AI is currently in a pre-incorporation stage and may:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Transition into a Limited Liability Company (LLC) or Corporation (C-Corp)</li><li>Update legal ownership and structure</li></ul><p>These Terms will automatically transfer to the new legal entity upon formation.</p></>)
                },
                {
                  title: '9. Modifications to Terms',
                  content: <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Continued use of the Service means you accept the updated Terms.</p>
                },
                {
                  title: '10. Termination',
                  content: <p>We may suspend or terminate access to the Service at any time without notice for any reason, including misuse.</p>
                },
                {
                  title: '11. Governing Law',
                  content: <p>These Terms shall be governed by and interpreted under the laws of the United States and the State in which the company is registered (to be updated upon incorporation).</p>
                },
                {
                  title: '12. Contact',
                  content: (<><p>For questions regarding these Terms, contact:</p><p className="mt-2">Email: <a href="mailto:fintechainewyork@gmail.com" className="hover:underline" style={{ color: '#60CFFF' }}>fintechainewyork@gmail.com</a></p></>)
                },
                {
                  title: '13. Acknowledgment',
                  content: (<><p className="mb-2">By using this Service, you acknowledge that:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>You understand this is an experimental AI system</li><li>You assume full responsibility for your financial decisions</li><li>You agree not to hold FinSeek AI or its founders liable for any outcomes</li></ul></>)
                },
              ].map((section) => (
                <section key={section.title}>
                  <h2 className="text-base font-bold mb-3 text-white">{section.title}</h2>
                  {section.content}
                </section>
              ))}

              <div className="pt-6" style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
                <p className="text-xs italic" style={{ color: 'rgba(255,255,255,1)' }}>End of Terms and Conditions</p>
              </div>
            </div>

            {/* Footer inside card */}
            <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,1)' }}>© {new Date().getFullYear()} FinSeek AI. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="text-xs hover:opacity-80 transition-opacity" style={{ color: '#60CFFF' }}>Privacy Policy</Link>
                <Link to="/terms" className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}