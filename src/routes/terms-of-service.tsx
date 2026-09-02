import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold tracking-tighter mb-8 uppercase">Terms of Service</h1>
          <div className="prose prose-stone text-stone-600 font-serif space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>
              This website is operated by Atlas & Oak. Throughout the site, the terms “we”, “us” and “our” refer to Atlas & Oak. Atlas & Oak offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">1. Online Store Terms</h2>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">2. General Conditions</h2>
            <p>
              We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks. Credit card information is always encrypted during transfer over networks.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">3. Accuracy, Completeness and Timeliness of Information</h2>
            <p>
              We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">4. Modifications to the Service and Prices</h2>
            <p>
              Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">5. Products or Services</h2>
            <p>
              Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">6. Billing and Account Information</h2>
            <p>
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">7. Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of Oregon, United States.
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
