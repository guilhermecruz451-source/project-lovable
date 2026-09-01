import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, User, Menu, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button className="md:hidden p-2 -ml-2 mr-2 text-muted-foreground hover:text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
              <a href="/" className="text-2xl font-bold tracking-tighter uppercase">
                Vanguard
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#" className="transition-colors hover:text-primary">New Arrivals</a>
              <a href="#" className="transition-colors hover:text-primary">Apparel</a>
              <a href="#" className="transition-colors hover:text-primary">Accessories</a>
              <a href="#" className="transition-colors hover:text-primary">Collections</a>
              <a href="#" className="transition-colors hover:text-primary">Journal</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                <span className="sr-only">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 lg:py-56 flex flex-col items-start justify-center">
            <span className="inline-block py-1 px-3 mb-6 border border-white/30 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
              Fall / Winter 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-3xl leading-[1.1]">
              Redefining <br className="hidden md:block"/> Modern Masculinity.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl font-light">
              Crafted in the USA. Uncompromising quality and timeless silhouettes for the contemporary man.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-none text-base h-14 px-8 bg-white text-zinc-950 hover:bg-zinc-200">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="rounded-none text-base h-14 px-8 border-white text-white hover:bg-white hover:text-zinc-950 bg-transparent">
                Explore Lookbook
              </Button>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">New Arrivals</h2>
                <p className="text-muted-foreground">The latest additions to our collection.</p>
              </div>
              <a href="#" className="hidden sm:flex items-center text-sm font-semibold hover:underline underline-offset-4">
                Shop all <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {[
                { name: "Heavyweight Field Jacket", price: "$285", category: "Outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
                { name: "Selvedge Straight Denim", price: "$195", category: "Bottoms", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" },
                { name: "Oxford Button-Down", price: "$125", category: "Shirts", image: "https://images.unsplash.com/photo-1596755094514-f87e32f6b717?q=80&w=800&auto=format&fit=crop" },
                { name: "Leather Weekender", price: "$450", category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" }
              ].map((product) => (
                <div key={product.name} className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-4 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                    <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                    <p className="text-sm font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:hidden flex justify-center">
              <Button variant="outline" className="w-full rounded-none h-12">
                Shop all New Arrivals
              </Button>
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        <section className="py-32 bg-zinc-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=1200&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-auto object-cover grayscale contrast-125"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">The Vanguard Way</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                  American Heritage, <br /> Global Perspective.
                </h2>
                <div className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed">
                  <p>
                    Born in the heart of the United States, Vanguard represents a new era of menswear. We believe that true style isn't about following trends, but about finding pieces that stand the test of time.
                  </p>
                  <p>
                    Every garment is meticulously crafted with an unwavering commitment to quality, utilizing premium materials sourced from the finest mills around the world.
                  </p>
                </div>
                <div className="mt-10">
                  <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                    Read Our Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <a href="/" className="text-2xl font-bold tracking-tighter uppercase text-white mb-6 block">
                Vanguard
              </a>
              <p className="text-sm leading-relaxed max-w-xs">
                Modern menswear for the discerning individual. Crafted with purpose, designed for life.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Shop</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clothing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 w-full focus:outline-none focus:border-zinc-500 text-sm rounded-l-md"
                />
                <button type="submit" className="bg-white text-zinc-950 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 transition-colors rounded-r-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs">
            <p>&copy; {new Date().getFullYear()} Vanguard. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
