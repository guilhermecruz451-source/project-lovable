import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/return-policy")({
  component: ReturnPolicyPage,
});

function ReturnPolicyPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter mb-8 uppercase">Return & Refund Policy</h1>
          <div className="prose prose-stone text-stone-600 font-serif space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>
              We stand behind the quality of our garments. If you are not completely satisfied with your purchase, we offer a straightforward return and refund process.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">1. Return Window</h2>
            <p>
              We accept returns for refunds within <strong>30 days of the delivery date</strong>. Any return requests made after 30 days of delivery will not be accepted.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">2. Condition of Items</h2>
            <p>
              To be eligible for a return, your item must be in the same condition that you received it. It must be:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Unworn and unwashed.</li>
              <li>Free of any stains, odors, or damage.</li>
              <li>In its original packaging with all original tags still attached.</li>
            </ul>
            <p>
              Final sale items, gift cards, and custom-made products are exempt from being returned.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">3. How to Initiate a Return</h2>
            <p>
              To initiate a return, please follow these steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Email our support team at <strong>support@atlasandoak.example.com</strong> with your Order Number and the reason for the return.</li>
              <li>Once approved, you will receive a pre-paid return shipping label and instructions on how to package the item.</li>
              <li>Securely pack the item in its original packaging and attach the provided shipping label.</li>
              <li>Drop the package off at the designated carrier location within 7 days of receiving the label.</li>
            </ol>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">4. Return Shipping Costs</h2>
            <p>
              If the return is due to our error (e.g., you received a defective or incorrect item), we will cover the return shipping costs completely. If you are returning an item due to a change of mind or sizing issue, a flat fee of $7.00 will be deducted from your final refund amount to cover the return shipping label.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">5. Refund Processing Timeline</h2>
            <p>
              Once your return is received and inspected at our facility, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund based on the condition of the item.
            </p>
            <p>
              If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within <strong>5 to 7 business days</strong>. Please note that it may take additional time for your bank or credit card company to post the refund to your account.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">6. Exchanges</h2>
            <p>
              We only replace items if they are defective or damaged upon arrival. If you need a different size or color, please return your original item for a refund and place a new order on our website.
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
