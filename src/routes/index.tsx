import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, User, Menu, ChevronRight, ArrowRight, Image as ImageIcon } from "lucide-react";
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
                <span className="sr-only">Abrir menu</span>
              </button>
              <a href="/" className="text-2xl md:text-3xl font-bold tracking-tighter uppercase font-sans">
                Atlas & Oak
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase font-sans">
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Novidades</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Jeans</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Casacos</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Acessórios</a>
              <a href="#" className="transition-colors text-stone-600 hover:text-stone-950">Diário</a>
            </nav>

            <div className="flex items-center space-x-5">
              <button className="text-stone-600 hover:text-stone-950 transition-colors p-2">
                <User className="h-5 w-5" />
                <span className="sr-only">Conta</span>
              </button>
              <button className="text-stone-600 hover:text-stone-950 transition-colors p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-stone-950"></span>
                <span className="sr-only">Carrinho</span>
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
              Feito para a Jornada
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-3xl leading-[1]">
              Elegância Rústica.
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-xl font-light">
              Moda masculina premium. Qualidade sem concessões para o pioneiro moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-none text-base h-14 px-8 bg-stone-50 text-stone-950 hover:bg-stone-200">
                Comprar a Coleção
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 bg-stone-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Jeans Cru", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" },
                { name: "Casacos Pesados", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
                { name: "Artigos de Couro", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" }
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
                      Explorar <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="py-24 bg-white border-t border-stone-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop" 
                  alt="A Polo Essencial"
                  className="w-full h-auto object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold tracking-widest uppercase mb-4 text-stone-500">Item em Destaque</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                  A Polo Essencial
                </h2>
                <div className="flex items-center mb-6 space-x-4">
                  <span className="text-2xl font-bold text-stone-950">R$ 90,00</span>
                  <span className="text-lg text-stone-400 line-through">R$ 149,90</span>
                </div>
                <p className="text-lg text-stone-600 font-serif mb-8 leading-relaxed">
                  Feita para o cavalheiro moderno, nossa Polo Essencial combina estilo clássico com conforto inigualável. Perfeita para qualquer ocasião.
                </p>
                <div className="flex sm:flex-row flex-col gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto rounded-none h-14 px-8 bg-stone-950 text-stone-50 hover:bg-stone-800 uppercase tracking-widest font-bold">
                    <Link to="/product/$id" params={{ id: "essential-polo" }}>
                      Comprar Agora
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals Section - Now with Placeholders for New Categories */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 border-b border-stone-200 pb-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase">Novidades</h2>
                <p className="text-stone-500 font-serif italic">Espaço reservado para os próximos lançamentos.</p>
              </div>
              <a href="#" className="hidden sm:flex items-center text-sm font-bold uppercase tracking-widest hover:text-stone-600 transition-colors">
                Ver Tudo <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {[
                { name: "Nome do Produto", price: "R$ 0,00", category: "Calça", image: null },
                { name: "Nome do Produto", price: "R$ 0,00", category: "Camisa Longa", image: null },
                { name: "Nome do Produto", price: "R$ 0,00", category: "Camisa Polo", image: null },
                { name: "Nome do Produto", price: "R$ 0,00", category: "Camisa Manga Curta", image: null },
                { name: "Nome do Produto", price: "R$ 0,00", category: "Casaco", image: null },
                { name: "Nome do Produto", price: "R$ 0,00", category: "Tênis", image: null },
                { name: "Nome do Produto", price: "R$ 0,00", category: "Acessório", image: null },
                { name: "Nome do Produto", price: "R$ 0,00", category: "Bermuda", image: null }
              ].map((product, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-6 relative border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 group-hover:border-stone-400 group-hover:bg-stone-200 transition-colors">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-center px-4">
                          Adicionar {product.category}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="space-y-2 text-center mt-auto">
                    <p className="text-xs text-stone-500 uppercase tracking-widest">{product.category}</p>
                    <h3 className="text-base font-bold text-stone-950">{product.name}</h3>
                    <p className="text-sm font-medium text-stone-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 sm:hidden flex justify-center">
              <Button variant="outline" className="w-full rounded-none h-14 border-stone-950 text-stone-950 uppercase tracking-widest font-bold">
                Ver Tudo
              </Button>
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        <section className="py-24 bg-stone-950 text-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <span className="text-sm font-bold tracking-widest uppercase mb-4 text-stone-400">Nossa Herança</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                  Forjado com excelência. <br /> Feito para durar.
                </h2>
                <div className="space-y-6 text-lg text-stone-300 font-serif leading-relaxed">
                  <p>
                    Atlas & Oak nasceu do desejo de retornar às raízes da moda masculina autêntica. Acreditamos em roupas que contam uma história, peças que só melhoram com o tempo e o uso.
                  </p>
                  <p>
                    Trabalhamos com os melhores artesãos para produzir roupas que resistem aos elementos e ao teste do tempo. Sem atalhos. Sem concessões.
                  </p>
                </div>
                <div className="mt-12">
                  <Button variant="outline" className="rounded-none h-14 px-8 border-stone-50 text-stone-950 bg-stone-50 hover:bg-stone-200 hover:text-stone-950 uppercase tracking-widest font-bold">
                    Leia o Manifesto
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=1200&auto=format&fit=crop" 
                  alt="Trabalho artesanal" 
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
                Fornecedores de moda masculina refinada. Produtos desenhados para a fronteira moderna, fabricados com padrões rigorosos.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-stone-950 font-bold mb-6 uppercase tracking-wider text-sm">Loja</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-stone-950 transition-colors">Novidades</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Jeans</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Casacos</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Camisas</a></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Acessórios</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-stone-950 font-bold mb-6 uppercase tracking-wider text-sm">Suporte</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-stone-950 transition-colors">FAQ</a></li>
                <li><Link to="/shipping-policy" className="hover:text-stone-950 transition-colors">Política de Frete</Link></li>
                <li><Link to="/return-policy" className="hover:text-stone-950 transition-colors">Política de Devolução</Link></li>
                <li><a href="#" className="hover:text-stone-950 transition-colors">Guia de Tamanhos</a></li>
                <li><Link to="/contact" className="hover:text-stone-950 transition-colors">Fale Conosco</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-stone-950 font-bold mb-6 uppercase tracking-wider text-sm">A Expedição</h4>
              <p className="text-sm mb-6 font-serif">Junte-se à nossa lista para novidades, acesso antecipado a lançamentos e ofertas exclusivas.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Endereço de E-mail" 
                  className="bg-white border border-stone-300 text-stone-950 px-4 py-3 w-full focus:outline-none focus:border-stone-950 focus:ring-1 focus:ring-stone-950 text-sm rounded-none"
                />
                <button type="submit" className="bg-stone-950 text-stone-50 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors rounded-none">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 text-xs font-semibold tracking-wide uppercase">
            <p>&copy; {new Date().getFullYear()} Atlas & Oak. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-stone-950 transition-colors">Política de Privacidade</Link>
              <Link to="/terms-of-service" className="hover:text-stone-950 transition-colors">Termos de Serviço</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}