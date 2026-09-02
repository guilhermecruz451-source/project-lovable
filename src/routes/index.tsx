import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, User, Menu, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col font-serif">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <button className="md:hidden p-2 -ml-2 mr-2 text-stone-600 hover:text-stone-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
              <a href="/" className="text-2xl md:text-3xl font-bold tracking-tighter uppercase font-sans">
                Atlas & Oak
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase font-sans">
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">New Arrivals</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Denim</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Outerwear</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Accessories</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Journal</a>
            </nav>

            <div className="flex items-center space-x-5">
              <button className="text-stone-600 hover:text-stone-950 transition-colors p-2">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </button>
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
        {/* Hero Section */}
        <section className="relative bg-stone-900 text-stone-50 overflow-hidden h-[85vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-transparent"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
            <span className="inline-block py-1 px-3 mb-6 border border-stone-400 rounded-sm text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
              Built for the Journey
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-3xl leading-[1]">
              Rugged Elegance.
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-xl font-light">
              Premium menswear crafted in the USA. Uncompromising quality for the modern pioneer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-none text-base h-14 px-8 bg-stone-50 text-stone-950 hover:bg-stone-200">
                Shop The Collection
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 bg-stone-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Raw Denim", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" },
                { name: "Heavy Outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
                { name: "Leather Goods", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" }
              ].map((category) => (
                <div key={category.name} className="group relative h-96 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-stone-900">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl font-bold text-stone-50 uppercase tracking-widest mb-4">{category.name}</h3>
                    <span className="inline-flex items-center text-sm font-semibold text-stone-50 uppercase tracking-wider opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 border-b border-stone-200 pb-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase">New Arrivals</h2>
                <p className="text-stone-500 font-serif italic">Fresh goods for the current season.</p>
              </div>
              <a href="#" className="hidden sm:flex items-center text-sm font-bold uppercase tracking-widest hover:text-stone-600 transition-colors">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {[
                { name: "Waxed Canvas Cruiser", price: "$325", category: "Outerwear", image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop" },
                { name: "14oz Selvedge Denim", price: "$215", category: "Bottoms", image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=800&auto=format&fit=crop" },
                { name: "Flannel Workshirt", price: "$145", category: "Shirts", image: "https://images.unsplash.com/photo-1596755094514-f87e32f6b717?q=80&w=800&auto=format&fit=crop" },
                { name: "Goodyear Welt Boots", price: "$380", category: "Footwear", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop" }
              ].map((product) => (
                <div key={product.name} className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-200 mb-6 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-xs text-stone-500 uppercase tracking-widest">{product.category}</p>
                    <h3 className="text-base font-bold text-stone-950">{product.name}</h3>
                    <p className="text-sm font-medium text-stone-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 sm:hidden flex justify-center">
              <Button variant="outline" className="w-full rounded-none h-14 border-stone-950 text-stone-950 uppercase tracking-widest font-bold">
                View All
              </Button>
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        <section className="py-24 bg-stone-950 text-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <span className="text-sm font-bold tracking-widest uppercase mb-4 text-stone-400">Our Heritage</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                  Forged in the USA. <br /> Built to Last.
                </h2>
                <div className="space-y-6 text-lg text-stone-300 font-serif leading-relaxed">
                  <p>
                    Atlas & Oak was born from a desire to return to the roots of American menswear. We believe in garments that tell a story, pieces that only get better with age and wear.
                  </p>
                  <p>
                    We partner with historic mills and skilled craftsmen across the United States to produce clothing that stands up to the elements and the test of time. No shortcuts. No compromises.
                  </p>
                </div>
                <div className="mt-12">
                  <Button variant="outline" className="rounded-none h-14 px-8 border-stone-50 text-stone-950 bg-stone-50 hover:bg-stone-200 hover:text-stone-950 uppercase tracking-widest font-bold">
                    Read The Manifesto
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=1200&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-[600px] object-cover sepia-[.2] contrast-125"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 text-stone-600 py-20 border-t border-stone-200 font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <a href="/" className="text-3xl font-bold tracking-tighter uppercase text-stone-950 mb-6 block">
                Atlas & Oak
              </a>
              <p className="text-sm leading-relaxed max-w-sm font-serif">
                Purveyors of fine American menswear. Goods designed for the modern frontier, crafted with uncompromising standards.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-stone-950 font-bold mb-6 uppercase tracking-wider text-sm">Shop</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-stone-950 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Denim</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Outerwear</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Shirting</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Accessories</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-stone-950 font-bold mb-6 uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-stone-950 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Garment Care</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-stone-950 font-bold mb-6 uppercase tracking-wider text-sm">The Dispatch</h4>
              <p className="text-sm mb-6 font-serif">Join our list for field notes, early access to new releases, and exclusive provisions.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white border border-stone-300 text-stone-950 px-4 py-3 w-full focus:outline-none focus:border-stone-950 focus:ring-1 focus:ring-stone-950 text-sm rounded-none"
                />
                <button type="submit" className="bg-stone-950 text-stone-50 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors rounded-none">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 text-xs font-semibold tracking-wide uppercase">
            <p>&copy; {new Date().getFullYear()} Atlas & Oak. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-stone-950 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-950 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
