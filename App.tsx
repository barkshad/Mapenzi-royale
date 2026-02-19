import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Utensils, Star, Menu as MenuIcon, X } from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, PHONE_NUMBER } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const callLink = `tel:${PHONE_NUMBER}`;

  const menuItems = [
    {
      name: "Royal Pilau",
      price: 200,
      description: "Fragrant rice cooked with our signature blend of Swahili spices, tender beef, and caramelized onions. Served with kachumbari.",
      image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Royal Biryani",
      price: 200,
      description: "A rich and aromatic layered rice dish with marinated chicken, saffron, potatoes, and dried fruits. A feast for the senses.",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const schedule = [
    { day: "Monday", open: false },
    { day: "Tuesday", open: false },
    { day: "Wednesday", open: false },
    { day: "Thursday", open: false },
    { day: "Friday", open: true },
    { day: "Saturday", open: false },
    { day: "Sunday", open: true },
  ];

  return (
    <div className="relative min-h-screen bg-royale-cream font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-royale-brown/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-white font-serif text-2xl tracking-widest font-bold">
            MAPENZI <span className="text-royale-gold">ROYALE</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-white/90 text-sm tracking-widest uppercase font-medium">
            <a href="#about" className="hover:text-royale-gold transition-colors">About</a>
            <a href="#menu" className="hover:text-royale-gold transition-colors">Menu</a>
            <a href="#availability" className="hover:text-royale-gold transition-colors">Availability</a>
            <a href="#contact" className="hover:text-royale-gold transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <Button variant="primary" href={callLink} className="!px-6 !py-2 !text-xs">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-royale-brown flex flex-col items-center justify-center space-y-8 text-white md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif tracking-wider">About</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif tracking-wider">Menu</a>
          <a href="#availability" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif tracking-wider">Availability</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif tracking-wider">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1920&auto=format&fit=crop" 
            alt="A large platter of delicious royal biryani" 
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royale-brown/90 via-royale-brown/70 to-royale-brown/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <p className="text-royale-gold tracking-[0.3em] uppercase text-sm md:text-base font-medium animate-fade-in-up">
            Authentic Swahili Flavor
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-royale-cream font-bold leading-tight">
            Royal Pilau <br/> <span className="italic font-normal text-royale-gold">&</span> Biryani
          </h1>
          <div className="flex flex-col items-center gap-2 text-white/90 font-light tracking-wide text-lg">
            <p>Available Only on Friday & Sunday</p>
            <div className="w-12 h-[1px] bg-royale-gold my-2"></div>
            <p className="font-serif text-2xl text-royale-gold">200 KSH <span className="text-sm text-white/70 align-middle font-sans ml-1">PER PLATE</span></p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button href={callLink} variant="primary" icon={<Phone size={18} />}>
              Call to Order
            </Button>
            <Button href={whatsappLink} variant="secondary" icon={<MessageCircle size={18} />}>
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" className="bg-royale-cream">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 text-royale-gold">
              <Star size={20} fill="#C8A951" />
              <span className="tracking-widest uppercase text-sm font-bold text-royale-brown">Our Story</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-royale-brown leading-tight">
              A Taste of <span className="italic text-royale-gold">Royalty</span> in Every Bite.
            </h2>
            <p className="text-royale-brown/80 leading-relaxed text-lg">
              At Mapenzi Royale, we believe food is a language of love. Our recipes are steeped in tradition, 
              using only the finest authentic spices to create aromatic Pilau and rich, flavorful Biryani. 
              Prepared with patience and served with pride, we bring the authentic Swahili coast experience 
              directly to your table.
            </p>
            <div className="pt-4">
              <div className="inline-block border-b border-royale-brown pb-1 text-royale-brown font-medium tracking-wide">
                Est. 2026
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 border-2 border-royale-gold translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800&auto=format&fit=crop" 
              alt="A vibrant arrangement of authentic Swahili spices" 
              className="w-full aspect-square md:aspect-[4/5] object-cover relative z-10 shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Availability Section */}
      <Section id="availability" className="bg-royale-brown text-royale-cream text-center">
        <h2 className="font-serif text-4xl mb-16 text-white">Opening Hours</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {schedule.map((day) => (
            <div 
              key={day.day}
              className={`flex flex-col items-center justify-center p-6 border ${
                day.open 
                  ? 'border-royale-gold bg-royale-gold/10 scale-110 shadow-xl z-10' 
                  : 'border-white/10 bg-transparent opacity-50'
              } transition-all duration-300`}
            >
              <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Day</span>
              <span className={`font-serif text-xl ${day.open ? 'text-royale-gold font-bold' : 'text-white'}`}>
                {day.day.substring(0, 3)}
              </span>
              <div className={`mt-4 text-xs tracking-wider px-3 py-1 rounded-full ${day.open ? 'bg-royale-gold text-royale-brown' : 'bg-white/10'}`}>
                {day.open ? 'OPEN' : 'CLOSED'}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-white/60 font-light italic">
          *Pre-orders highly recommended for weekends.
        </p>
      </Section>

      {/* Menu & Pricing Section */}
      <Section id="menu" className="bg-royale-cream">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-royale-gold uppercase tracking-widest text-sm font-bold">The Royal Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl text-royale-brown">Our Weekend Specialties</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <div key={item.name} className="group cursor-default">
              <div className="overflow-hidden mb-6 relative">
                <div className="absolute top-4 right-4 bg-royale-gold text-royale-brown px-4 py-2 font-bold font-serif text-xl shadow-lg z-10">
                  {item.price} KSH
                </div>
                <img 
                  src={item.image} 
                  alt={`A delicious serving of ${item.name}`} 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-3xl text-royale-brown mb-3 group-hover:text-royale-gold transition-colors">
                {item.name}
              </h3>
              <p className="text-royale-brown/70 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="h-[1px] w-full bg-royale-brown/10"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section id="contact" className="bg-royale-dark text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-white/10"></div>

        <div className="relative z-10 space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl text-royale-gold mb-2">Ready to Taste?</h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Experience the royal flavor this weekend. Don't miss out on the finest Pilau and Biryani in town.
          </p>
          
          <div className="font-sans text-3xl md:text-5xl font-bold text-white tracking-wider py-8">
            {PHONE_NUMBER}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href={callLink} variant="primary" className="min-w-[200px]">
              Call Now
            </Button>
            <Button href={whatsappLink} variant="whatsapp" className="min-w-[200px]" icon={<MessageCircle />}>
              WhatsApp Order
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-royale-cream/60 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 font-serif text-2xl text-white tracking-widest">
            MAPENZI <span className="text-royale-gold">ROYALE</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8 uppercase tracking-wider text-xs">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-royale-gold" />
              <span>Nakuru, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-royale-gold" />
              <span>Fri & Sun Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils size={14} className="text-royale-gold" />
              <span>Pre-Orders Available</span>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p>&copy; {new Date().getFullYear()} Mapenzi Royale. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-40 border-t border-royale-brown/10 flex gap-4">
         <Button href={callLink} variant="primary" className="flex-1 !py-3 !px-2 !text-xs">
            Call
         </Button>
         <Button href={whatsappLink} variant="whatsapp" className="flex-1 !py-3 !px-2 !text-xs" icon={<MessageCircle size={16}/>}>
            WhatsApp
         </Button>
      </div>
    </div>
  );
};

export default App;