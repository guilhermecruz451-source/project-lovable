import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();

  // Using static data for the specific polo shirt requested.
  const product = {
    id: id || "essential-polo",
    name: "The Essential Polo",
    price: 90.00,
    originalPrice: 149.90,
    description: "Crafted for the modern gentleman, our Essential Polo combines classic styling with uncompromising comfort. Made from premium, breathable cotton, it features a tailored fit that flatters without restricting movement. The perfect versatile piece for any wardrobe, easily transitioning from a casual day out to a smart-casual evening event.",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop",
    features: [
      "100% Premium Pima Cotton",
      "Tailored modern fit",
      "Ribbed collar and cuffs",
      "Two-button placket with pearlized buttons",
      "Pre-shrunk for consistent fit"
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col font-serif">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tighter uppercase font-sans">
                Atlas & Oak
              </Link>
            </div>
            <div className="flex items-center space-x-5">
              <button className="text-stone-600 hover:text-stone-950 transition-colors p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-stone-950"></span>
                <span className="sr-only">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-stone-500 hover:text-stone-950 uppercase tracking-widest mb-8 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Product Image */}
            <div className="bg-stone-200 aspect-[3/4] lg:aspect-auto lg:h-[700px] relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col pt-8 lg:pt-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-8 space-x-4">
                <span className="text-3xl font-bold text-stone-950">${product.price.toFixed(2)}</span>
                <span className="text-xl text-stone-400 line-through">${product.originalPrice.toFixed(2)}</span>
              </div>

              <div className="prose prose-stone mb-10 font-serif text-stone-600">
                <p>{product.description}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-stone-600 font-serif">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest">Size</h3>
                  <button className="text-xs text-stone-500 underline uppercase tracking-wider hover:text-stone-950">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button 
                      key={size}
                      className="border border-stone-300 py-3 text-sm font-bold hover:border-stone-950 hover:bg-stone-950 hover:text-stone-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-stone-200">
                <Button size="lg" className="w-full rounded-none h-16 bg-stone-950 text-stone-50 hover:bg-stone-800 uppercase tracking-widest font-bold text-lg">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-stone-100 text-stone-600 py-12 border-t border-stone-200 font-sans mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-wide uppercase">&copy; {new Date().getFullYear()} Atlas & Oak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
