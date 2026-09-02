import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, User, Menu, ChevronRight, ArrowRight, Image as ImageIcon, X, Star, Truck, RefreshCcw, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import imagem1 from "@/assets/uploads/imagem-1.png";
import imagem2 from "@/assets/uploads/imagem-2.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("todos");

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const categories = ["todos", "Calça", "Camisa Longa", "Camisa Polo", "Camisa Manga Curta", "Casaco", "Tênis", "Acessório", "Bermuda"];
  
  const novidades = [
    { name: "Jaqueta de Couro Vintage", price: "R$ 899,00", category: "Casaco" },
    { name: "Calça Jeans Selvedge", price: "R$ 349,00", category: "Calça" },
    { name: "Camisa Oxford Branca", price: "R$ 199,00", category: "Camisa Longa" },
    { name: "Polo Piquet Clássica", price: "R$ 149,00", category: "Camisa Polo" },
    { name: "Camisa Linho Verão", price: "R$ 179,00", category: "Camisa Manga Curta" },
    { name: "Botas Chelsea Suede", price: "R$ 459,00", category: "Tênis" },
    { name: "Cinto Couro Legítimo", price: "R$ 129,00", category: "Acessório" },
    { name: "Bermuda Sarja Chino", price: "R$ 159,00", category: "Bermuda" }
  ];

  const filteredNovidades = activeTab === "todos" 
    ? novidades 
    : novidades.filter(n => n.category === activeTab);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col font-serif">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <button onClick={toggleMobileMenu} className="md:hidden p-2 -ml-2 mr-2 text-stone-600 hover:text-stone-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </button>
              <a href="#" className="text-2xl md:text-3xl font-bold tracking-tighter uppercase font-sans">
                Atlas & Oak
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase font-sans">
              <a href="#novidades" className="transition-colors text-stone-600 hover:text-stone-950">Novidades</a>
              <a href="#categorias" className="transition-colors text-stone-600 hover:text-stone-950">Categorias</a>
              <a href="#mais-vendidos" className="transition-colors text-stone-600 hover:text-stone-950">Mais Vendidos</a>
              <a href="#heranca" className="transition-colors text-stone-600 hover:text-stone-950">Nossa História</a>
            </nav>

            <div className="flex items-center space-x-5">
              <button className="text-stone-600 hover:text-stone-950 transition-colors p-2">
                <User className="h-5 w-5" />
                <span className="sr-only">Conta</span>
              </button>
              <button onClick={toggleCart} className="text-stone-600 hover:text-stone-950 transition-colors p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-stone-950"></span>
                <span className="sr-only">Carrinho</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-out */}
      <div className={`fixed inset-0 bg-stone-950/50 z-[60] transition-opacity ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu} />
      <div className={`fixed top-0 left-0 h-full w-64 bg-stone-50 z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <span className="text-lg font-bold tracking-tighter uppercase font-sans">Menu</span>
          <button onClick={toggleMobileMenu} className="text-stone-500 hover:text-stone-950">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-6 text-sm font-medium tracking-wide uppercase font-sans">
          <a href="#novidades" onClick={toggleMobileMenu} className="text-stone-600 hover:text-stone-950">Novidades</a>
          <a href="#categorias" onClick={toggleMobileMenu} className="text-stone-600 hover:text-stone-950">Categorias</a>
          <a href="#mais-vendidos" onClick={toggleMobileMenu} className="text-stone-600 hover:text-stone-950">Mais Vendidos</a>
          <a href="#heranca" onClick={toggleMobileMenu} className="text-stone-600 hover:text-stone-950">Nossa História</a>
        </nav>
      </div>

      {/* Cart Slide-out */}
      <div className={`fixed inset-0 bg-stone-950/50 z-[60] transition-opacity ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleCart} />
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-stone-50 z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-white">
          <h2 className="text-lg font-bold uppercase tracking-widest font-sans">Seu Carrinho</h2>
          <button onClick={toggleCart} className="text-stone-500 hover:text-stone-950 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-stone-500 bg-stone-50">
          <ShoppingBag className="h-16 w-16 mb-4 opacity-20" />
          <p className="uppercase tracking-widest text-sm font-sans mb-6">Seu carrinho está vazio</p>
          <Button variant="outline" className="uppercase tracking-widest text-xs font-bold font-sans rounded-none border-stone-950 text-stone-950" onClick={toggleCart}>
            Continuar Comprando
          </Button>
        </div>
        <div className="p-6 border-t border-stone-200 bg-white space-y-4">
          <div className="flex justify-between text-sm uppercase tracking-widest font-bold font-sans mb-4">
            <span>Total</span>
            <span>R$ 0,00</span>
          </div>
          <Button className="w-full rounded-none h-14 bg-stone-950 text-stone-50 hover:bg-stone-800 uppercase tracking-widest font-bold font-sans">
            Finalizar Compra
          </Button>
        </div>
      </div>

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
              <Button size="lg" className="rounded-none text-base h-14 px-8 bg-stone-50 text-stone-950 hover:bg-stone-200 uppercase tracking-widest font-bold">
                <a href="#novidades">Comprar a Coleção</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-12 bg-stone-950 text-stone-50 border-t border-stone-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
              <div className="flex flex-col items-center p-4">
                <Truck className="h-8 w-8 mb-4 text-stone-400" />
                <h4 className="text-sm font-bold uppercase tracking-widest font-sans mb-2">Frete Grátis</h4>
                <p className="text-sm text-stone-400 font-serif">Em todas as compras acima de R$ 400</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <RefreshCcw className="h-8 w-8 mb-4 text-stone-400" />
                <h4 className="text-sm font-bold uppercase tracking-widest font-sans mb-2">Troca Fácil</h4>
                <p className="text-sm text-stone-400 font-serif">Até 30 dias para devoluções sem custo</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <ShieldCheck className="h-8 w-8 mb-4 text-stone-400" />
                <h4 className="text-sm font-bold uppercase tracking-widest font-sans mb-2">Garantia Vitalícia</h4>
                <p className="text-sm text-stone-400 font-serif">Qualidade assegurada em costuras</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section id="categorias" className="py-20 bg-stone-100">
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

        {/* New Arrivals Section with Functional Tabs */}
        <section id="novidades" className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-stone-200 pb-6 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase font-sans">Novidades</h2>
                <p className="text-stone-500 font-serif italic">Explore nossos últimos lançamentos por categoria.</p>
              </div>
              
              <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <div className="flex space-x-2">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors rounded-none font-sans ${
                        activeTab === cat 
                          ? "bg-stone-950 text-stone-50" 
                          : "bg-transparent text-stone-500 border border-stone-200 hover:border-stone-950 hover:text-stone-950"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 min-h-[400px] transition-all">
              {filteredNovidades.length > 0 ? (
                filteredNovidades.map((product, idx) => (
                  <div key={idx} className="group cursor-pointer flex flex-col animate-in fade-in zoom-in-95 duration-500">
                    <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-6 relative border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 group-hover:border-stone-400 group-hover:bg-stone-200 transition-colors">
                      <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-center px-4 font-sans">
                        Adicionar Imagem
                      </span>
                    </div>
                    <div className="space-y-2 text-center mt-auto">
                      <p className="text-xs text-stone-500 uppercase tracking-widest font-sans">{product.category}</p>
                      <h3 className="text-base font-bold text-stone-950 font-sans">{product.name}</h3>
                      <p className="text-sm font-medium text-stone-600 font-sans">{product.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-stone-400 animate-in fade-in duration-500">
                  <ShoppingBag className="h-12 w-12 mb-4 opacity-20" />
                  <p className="font-serif italic text-lg">Nenhum produto nesta categoria ainda.</p>
                </div>
              )}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="w-full sm:w-auto px-12 rounded-none h-14 border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-stone-50 transition-colors uppercase tracking-widest font-bold font-sans">
                Ver Todo o Catálogo
              </Button>
            </div>
          </div>
        </section>

        {/* Mais Vendidos */}
        <section id="mais-vendidos" className="py-24 bg-white border-t border-stone-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase font-sans">Mais Vendidos</h2>
              <p className="text-stone-500 font-serif italic">As peças favoritas da nossa comunidade.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative group overflow-hidden bg-stone-100 aspect-square lg:aspect-auto lg:h-[600px] shadow-sm">
                <img src={imagem2} alt="Coleção Principal" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-8 text-stone-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-300 mb-2">Look Completo</span>
                  <h3 className="text-3xl font-bold uppercase tracking-widest mb-4 font-sans">O Uniforme Diário</h3>
                  <p className="mb-8 font-serif text-stone-300 max-w-md">Curadoria das nossas melhores peças, combinadas perfeitamente para você não precisar pensar na hora de vestir.</p>
                  <Button variant="outline" className="w-max rounded-none h-12 px-8 border-stone-50 text-stone-950 bg-stone-50 hover:bg-stone-200 uppercase tracking-widest font-bold font-sans">
                    Comprar o Look
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                {[
                  { name: "Camisa Algodão Peruano", price: "R$ 229,00" },
                  { name: "Jaqueta Trucker Lona", price: "R$ 589,00" },
                  { name: "Tênis Minimalista Branco", price: "R$ 419,00" },
                  { name: "Calça Chino Classic", price: "R$ 279,00" }
                ].map((product, i) => (
                  <div key={i} className="group cursor-pointer flex flex-col">
                    <div className="aspect-[3/4] bg-stone-100 mb-4 flex items-center justify-center border border-stone-200 group-hover:border-stone-400 transition-colors">
                      <ImageIcon className="h-8 w-8 text-stone-400 opacity-50" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <h4 className="text-sm font-bold text-stone-950 font-sans">{product.name}</h4>
                      <p className="text-sm font-medium text-stone-600">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-24 bg-stone-100 border-t border-stone-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase font-sans">O Que Dizem Nossos Clientes</h2>
              <p className="text-stone-500 font-serif italic max-w-2xl mx-auto">Não acredite apenas na nossa palavra. Veja o que os pioneiros modernos têm a dizer sobre a Atlas & Oak.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Thiago S.", text: "A qualidade da jaqueta é impressionante. O material é denso mas flexível, e o caimento foi perfeito desde o primeiro uso. Recomendo de olhos fechados." },
                { name: "Marcelo F.", text: "Comprei minhas primeiras calças aqui. O processo de lacear foi incrível e hoje elas têm as marcas exatas do meu dia a dia. Roupas com alma e resistência." },
                { name: "Rodrigo M.", text: "Serviço de atendimento excepcional e entrega muito rápida. A camisa tem um corte clássico impecável e o tecido respira muito bem no calor do nosso país." }
              ].map((review, idx) => (
                <div key={idx} className="bg-white p-8 shadow-sm border border-stone-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex text-stone-800 mb-6 gap-1">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="font-serif text-stone-600 mb-8 italic leading-relaxed">"{review.text}"</p>
                  <div className="mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest font-sans text-stone-950 block">— {review.name}</span>
                    <span className="text-xs text-stone-400 font-sans mt-1 block">Cliente Verificado</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        <section id="heranca" className="py-24 bg-stone-950 text-stone-50">
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
                  src={imagem1} 
                  alt="Trabalho artesanal" 
                  className="w-full h-[600px] object-cover sepia-[.2] contrast-125 rounded-sm"
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
                <li><a href="#novidades" className="hover:text-stone-950 transition-colors">Novidades</a></li>
                <li><a href="#categorias" className="hover:text-stone-950 transition-colors">Categorias</a></li>
                <li><a href="#mais-vendidos" className="hover:text-stone-950 transition-colors">Mais Vendidos</a></li>
                <li><a href="#heranca" className="hover:text-stone-950 transition-colors">Nossa História</a></li>
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