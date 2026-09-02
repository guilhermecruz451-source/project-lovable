import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping-policy")({
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter mb-8 uppercase">Shipping Policy</h1>
          <div className="prose prose-stone text-stone-600 font-serif space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>
              We are committed to delivering your Atlas & Oak provisions safely and promptly. Please review our shipping practices and timelines below.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">1. Order Processing Time</h2>
            <p>
              All orders are processed within <strong>1 to 2 business days</strong> (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
            </p>
            <p>
              During high-volume periods or sales events, processing may take up to 3 business days. If there is a significant delay expected in shipping your order, we will contact you via email or telephone.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">2. Shipping Rates & Delivery Estimates</h2>
            <p>
              We currently ship within the United States. Shipping charges for your order will be calculated and displayed at checkout. We offer the following shipping options:
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-stone-300">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="border border-stone-300 p-3 text-left font-bold">Shipping Method</th>
                    <th className="border border-stone-300 p-3 text-left font-bold">Estimated Transit Time</th>
                    <th className="border border-stone-300 p-3 text-left font-bold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stone-300 p-3">Standard Shipping</td>
                    <td className="border border-stone-300 p-3">3 to 5 business days</td>
                    <td className="border border-stone-300 p-3">$8.00</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-300 p-3">Expedited Shipping</td>
                    <td className="border border-stone-300 p-3">1 to 2 business days</td>
                    <td className="border border-stone-300 p-3">$25.00</td>
                  </tr>
                  <tr className="bg-stone-100 font-bold">
                    <td className="border border-stone-300 p-3">Orders over $150</td>
                    <td className="border border-stone-300 p-3">3 to 5 business days</td>
                    <td className="border border-stone-300 p-3">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm italic">
              *Delivery delays can occasionally occur due to carrier issues or severe weather conditions out of our control.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">3. Order Tracking</h2>
            <p>
              When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 24 hours for the tracking information to become available in the carrier's system.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">4. P.O. Boxes and APO/FPO Addresses</h2>
            <p>
              Atlas & Oak ships to addresses within the U.S., U.S. Territories, and APO/FPO/DPO addresses. Standard shipping is required for APO/FPO addresses, and expedited shipping is not available.
            </p>

            <h2 className="text-xl font-bold text-stone-950 uppercase tracking-wide font-sans mt-8">5. Lost or Stolen Packages</h2>
            <p>
              Atlas & Oak is not liable for any products lost or stolen during transit once the carrier has marked them as delivered. If your order is lost in transit (not marked as delivered), please contact us at support@atlasandoak.example.com within 14 days of the estimated delivery date so we can investigate and arrange for a replacement.
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
