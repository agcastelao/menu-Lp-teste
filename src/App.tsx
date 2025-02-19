import React, { useState } from 'react';
import { Menu, Wine, Coffee, UtensilsCrossed, ChefHat, Instagram, Facebook, MessageCircle, Clock, Phone, Mail, MapPin } from 'lucide-react';

function MenuSection({ title, items }: { title: string; items: Array<{ name: string; description: string; price: string }> }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-playfair text-amber-900 mb-6 border-b border-amber-200 pb-2">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-amber-700 transition-colors">{item.name}</h3>
              <span className="text-lg font-playfair text-amber-900 ml-4">{item.price}</span>
            </div>
            <p className="text-gray-600 mt-1 font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('starters');

  const menuData = {
    starters: [
      {
        name: "Sopa do Dia",
        description: "Caldo de legumes com ervas frescas e croutons crocantes",
        price: "R$ 25,00"
      },
      {
        name: "Tartar de Salmão",
        description: "Salmão fresco marinado com endro, alcaparras e limão siciliano",
        price: "R$ 42,00"
      },
      {
        name: "Bruschetta Clássica",
        description: "Pão italiano grelhado com tomate, manjericão e azeite de oliva extravirgem",
        price: "R$ 28,00"
      }
    ],
    mains: [
      {
        name: "Filé Mignon ao Molho de Vinho Tinto",
        description: "Filé grelhado, servido com purê de batatas trufado e legumes sautée",
        price: "R$ 98,00"
      },
      {
        name: "Risoto de Cogumelos Silvestres",
        description: "Arroz arbóreo cremoso com mix de cogumelos frescos e parmesão",
        price: "R$ 76,00"
      },
      {
        name: "Peixe do Dia",
        description: "Preparado grelhado ou assado, acompanhado de arroz de açafrão e vegetais",
        price: "R$ 85,00"
      }
    ],
    desserts: [
      {
        name: "Crème Brûlée",
        description: "Clássico creme de baunilha com crosta caramelizada",
        price: "R$ 22,00"
      },
      {
        name: "Torta de Chocolate Belga",
        description: "Torta intensa com calda de framboesa e sorvete de baunilha",
        price: "R$ 28,00"
      },
      {
        name: "Cheesecake de Frutas Vermelhas",
        description: "Base de biscoito amanteigado e cobertura de frutas frescas",
        price: "R$ 26,00"
      }
    ],
    drinks: [
      {
        name: "Vinho Tinto Malbec",
        description: "Argentina",
        price: "R$ 120,00"
      },
      {
        name: "Vinho Branco Sauvignon Blanc",
        description: "Chile",
        price: "R$ 110,00"
      },
      {
        name: "Negroni",
        description: "Gin, Campari, Vermute tinto",
        price: "R$ 38,00"
      },
      {
        name: "Mojito",
        description: "Rum, hortelã, limão, água com gás",
        price: "R$ 35,00"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center relative" 
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80")'}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <ChefHat className="w-16 h-16 mb-4" />
          <h1 className="text-5xl font-playfair mb-2 text-center px-4">Le Petit Bistro</h1>
          <p className="text-xl font-light italic text-center px-4">Cozinha francesa com toques contemporâneos</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10 overflow-x-auto">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center py-2 md:py-4 gap-2 md:gap-8 min-w-max">
            <button
              onClick={() => setActiveSection('starters')}
              className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                activeSection === 'starters' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              <Menu className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Entradas</span>
            </button>
            <button
              onClick={() => setActiveSection('mains')}
              className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                activeSection === 'mains' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Principais</span>
            </button>
            <button
              onClick={() => setActiveSection('desserts')}
              className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                activeSection === 'desserts' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              <Coffee className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Sobremesas</span>
            </button>
            <button
              onClick={() => setActiveSection('drinks')}
              className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                activeSection === 'drinks' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              <Wine className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Bebidas</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {activeSection === 'starters' && <MenuSection title="Entradas" items={menuData.starters} />}
        {activeSection === 'mains' && <MenuSection title="Pratos Principais" items={menuData.mains} />}
        {activeSection === 'desserts' && <MenuSection title="Sobremesas" items={menuData.desserts} />}
        {activeSection === 'drinks' && <MenuSection title="Bebidas" items={menuData.drinks} />}
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5" />
                <h3 className="font-medium">Horário de Funcionamento</h3>
              </div>
              <p className="text-amber-200">Segunda a Sábado: 12h às 23h</p>
              <p className="text-amber-200">Domingo: 12h às 18h</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-5 h-5" />
                <h3 className="font-medium">Contato</h3>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="w-4 h-4 text-amber-200" />
                <p className="text-amber-200">contato@lepetitbistro.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-200" />
                <p className="text-amber-200">Rua das Flores, 123 - Jardim Paulista, São Paulo - SP</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;