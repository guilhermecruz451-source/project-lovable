import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col font-serif">
      <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tighter uppercase font-sans">
              Atlas & Oak
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-8 uppercase">Privacy Policy</h1>
          <div className="prose prose-stone text-stone-600 font-serif space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>
              At Atlas & Oak, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from atlasandoak.example.com (the "Site").
            </p>
            
            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">1. Personal Information We Collect</h2>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information".
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">2. How We Use Your Personal Information</h2>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">3. Sharing Your Personal Information</h2>
            <p>
              We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site. We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">4. Your Rights</h2>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">5. Data Retention</h2>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">6. Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@atlasandoak.example.com or by mail using the details provided below:
            </p>
            <p>
              Atlas & Oak<br />
              123 Heritage Way, Suite 100<br />
              Portland, OR 97209<br />
              United States
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-stone-100 text-stone-600 py-12 border-t border-stone-200 font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-wide uppercase">&copy; {new Date().getFullYear()} Atlas & Oak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
