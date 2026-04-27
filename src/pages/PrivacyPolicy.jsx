import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Background from '@/components/layout/Background';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-inter relative">
      <Background />

      {/* Fixed Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
        <div
          className="glass-card px-6 py-3 flex items-center justify-between"
        >
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
          <div
            className="glass-card p-10" style={{ border: '0.5px solid rgba(255,255,255,0.9)' }}>
            {/* Title */}
            <div className="mb-10 pb-6" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
              <div className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#60CFFF' }}>
                Legal
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,1)' }}>Effective Date: April 2026</p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>

              <p>FinSeek AI ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website, prototype application, and related services (the "Service"). By using the Service, you agree to this Privacy Policy.</p>

              {[
                {
                  title: '1. Information We Collect',
                  content: (<><h3 className="font-semibold mb-2 text-white">a. Information You Provide</h3><p className="mb-2">We may collect:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-4"><li>Email address (for pre-registration or communication)</li><li>Any data you voluntarily input (e.g., financial data, transactions, or notes)</li></ul><h3 className="font-semibold mb-2 text-white">b. Automatically Collected Information</h3><p className="mb-2">We may collect limited technical data such as:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>Device type and browser</li><li>IP address (approximate location)</li><li>Basic usage data (pages visited, interactions)</li></ul></>)
                },
                {
                  title: '2. How We Use Your Information',
                  content: (<><p className="mb-2">We use your information to:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Provide and improve the Service</li><li>Analyze usage and enhance user experience</li><li>Generate AI-based financial insights</li><li>Communicate updates, product news, or early access opportunities</li></ul><p className="font-semibold text-white">We do not sell your personal data.</p></>)
                },
                {
                  title: '3. Financial Data Disclaimer',
                  content: (<><p className="mb-2">If you provide financial information:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-4"><li>It is used solely to generate insights within the platform</li><li>It may be processed by automated systems (AI models)</li><li>It may not be permanently stored</li></ul><div className="rounded-xl p-4" style={{ background: 'rgba(59,110,248,0.08)', border: '0.5px solid rgba(59,110,248,0.25)' }}><p className="font-semibold mb-1" style={{ color: '#60CFFF' }}>Important:</p><p>This is an early-stage prototype, and security measures may not yet meet full production standards.</p></div></>)
                },
                {
                  title: '4. Data Sharing',
                  content: (<><p className="mb-2">We do not sell or rent your personal data. We may share limited data with:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Service providers (e.g., hosting, analytics tools)</li><li>Future business entities if the company is incorporated or acquired</li></ul><p>All sharing is limited to what is necessary to operate the Service.</p></>)
                },
                {
                  title: '5. Data Security',
                  content: (<><p className="mb-2">We take reasonable steps to protect your data. However:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>No system is completely secure</li><li>The Service is in a prototype stage</li><li>You provide data at your own risk</li></ul><p>We recommend avoiding submission of highly sensitive financial information during this stage.</p></>)
                },
                {
                  title: '6. Data Retention',
                  content: (<><p className="mb-2">We may retain your information:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>For as long as necessary to operate the Service</li><li>Until you request deletion</li><li>Or until systems are updated or reset during development</li></ul><p>We reserve the right to delete data at any time during this early phase.</p></>)
                },
                {
                  title: '7. Your Rights',
                  content: (<><p className="mb-2">Depending on your location, you may have the right to:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Request access to your data</li><li>Request correction or deletion</li><li>Opt out of communications</li></ul><p>To exercise these rights, contact us at: <a href="mailto:fintechainewyork@gmail.com" className="hover:underline" style={{ color: '#60CFFF' }}>fintechainewyork@gmail.com</a></p></>)
                },
                {
                  title: '8. Cookies and Tracking',
                  content: (<><p className="mb-2">We may use basic cookies or analytics tools to:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Understand user behavior</li><li>Improve performance</li></ul><p>You can disable cookies through your browser settings.</p></>)
                },
                {
                  title: "9. Children's Privacy",
                  content: (<><p className="mb-1">This Service is not intended for individuals under 18.</p><p>We do not knowingly collect data from children.</p></>)
                },
                {
                  title: '10. Business Changes',
                  content: (<><p className="mb-2">FinSeek AI may:</p><ul className="list-disc list-inside space-y-1 ml-2 mb-3"><li>Transition into an LLC or Corporation</li><li>Merge, acquire, or be acquired</li></ul><p>In such cases, user data may be transferred as part of the business assets.</p></>)
                },
                {
                  title: '11. Updates to This Policy',
                  content: <p>We may update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.</p>
                },
                {
                  title: '12. Contact Us',
                  content: (<><p>If you have any questions about this Privacy Policy, contact:</p><p className="mt-2">Email: <a href="mailto:fintechainewyork@gmail.com" className="hover:underline" style={{ color: '#60CFFF' }}>fintechainewyork@gmail.com</a></p></>)
                },
                {
                  title: '13. Consent',
                  content: <p>By using the Service, you consent to this Privacy Policy and the collection and use of your information as described.</p>
                },
              ].map((section) => (
                <section key={section.title}>
                  <h2 className="text-base font-bold mb-3 text-white">{section.title}</h2>
                  {section.content}
                </section>
              ))}

              <div className="pt-6" style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
                <p className="text-xs italic" style={{ color: 'rgba(255,255,255,1)' }}>End of Privacy Policy</p>
              </div>
            </div>

            {/* Footer inside card */}
            <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,1)' }}>© {new Date().getFullYear()} FinSeek AI. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Privacy Policy</Link>
                <Link to="/terms" className="text-xs hover:opacity-80 transition-opacity" style={{ color: '#60CFFF' }}>Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}