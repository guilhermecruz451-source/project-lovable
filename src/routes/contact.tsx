import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">Contact Us</h1>
            <p className="text-lg text-stone-600 font-serif max-w-2xl mx-auto">
              Have a question about an order, our products, or want to learn more about our heritage? Our team is here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="bg-stone-100 p-10 rounded-sm">
              <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-stone-950 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Email Support</h3>
                    <p className="text-stone-600 font-serif mb-1">For general inquiries and order updates:</p>
                    <a href="mailto:support@atlasandoak.example.com" className="text-stone-950 font-bold hover:underline">
                      support@atlasandoak.example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-stone-950 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Phone</h3>
                    <p className="text-stone-600 font-serif mb-1">Mon-Fri, 9am - 5pm PST:</p>
                    <a href="tel:+15551234567" className="text-stone-950 font-bold hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-stone-950 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Headquarters</h3>
                    <p className="text-stone-600 font-serif leading-relaxed">
                      Atlas & Oak<br />
                      123 Heritage Way, Suite 100<br />
                      Portland, OR 97209<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-950 focus:ring-1 focus:ring-stone-950 rounded-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-950 focus:ring-1 focus:ring-stone-950 rounded-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-950 focus:ring-1 focus:ring-stone-950 rounded-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="orderNumber" className="text-sm font-bold uppercase tracking-wider text-stone-600">Order Number (Optional)</label>
                  <input 
                    type="text" 
                    id="orderNumber"
                    className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-950 focus:ring-1 focus:ring-stone-950 rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-950 focus:ring-1 focus:ring-stone-950 rounded-none resize-none"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-none h-14 bg-stone-950 text-stone-50 hover:bg-stone-800 uppercase tracking-widest font-bold">
                  Send Message
                </Button>
              </form>
            </div>
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
