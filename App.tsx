import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Utensils, Star, Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, PHONE_NUMBER } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      description: "Fragrant long-grain rice slow-cooked with our signature blend of Swahili spices, tender beef chunks, and caramelized onions. Served with fresh kachumbari.",
      image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Royal Biryani",
      price: 200,
      description: "A luxurious layered rice dish featuring marinated chicken, saffron-infused basmati rice, potatoes, and dried fruits. A true feast for the senses.",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const schedule = [
    { day: "Mon", open: false },
    { day: "Tue", open: false },
    { day: "Wed", open: false },
    { day: "Thu", open: false },
    { day: "Fri", open: true },
    { day: "Sat", open: false },
    { day: "Sun", open: true },
  ];

  return (
    <div className="relative min-h-screen bg-royale-cream font-sans text-royale-brown selection:bg-royale-brown selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-royale-cream/95 backdrop-blur-md border-royale-brown/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl tracking-widest font-bold text-royale-brown z-50">
            MAPENZI <span className="text-royale-gold">ROYALE</span>
          </a>
          
          <div className={`
            fixed inset-0 bg-royale-cream z-40 flex flex-col items-center justify-center gap-8 text-xl font-serif tracking-widest transition-transform duration-500 md:static md:bg-transparent md:flex-row md:text-xs md:gap-8 md:translate-y-0 md:font-sans md:uppercase md:tracking-widest md:h-auto md:w-auto
            ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          `}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-royale-gold transition-colors">About</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-royale-gold transition-colors">Menu</a>
            <a href="#availability" onClick={() => setMobileMenuOpen(false)} className="hover:text-royale-gold transition-colors">Availability</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-royale-gold transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4 z-50">
            <div className="hidden md:block">
              <Button variant={isScrolled ? "primary" : "outline"} href={callLink} className="!py-3 !px-6">
                Order Now
              </Button>
            </div>
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-royale-brown p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-royale-brown text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop" 
            alt="Royal Biryani Feast" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royale-brown/80 via-royale-brown/40 to-royale-brown/90"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block text-royale-gold text-xs font-bold tracking-[0.2em] uppercase border border-royale-gold/30 px-4 py-2 rounded-full backdrop-blur-sm">
              Authentic Swahili Cuisine
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] text-royale-cream">
              The Taste of <br/>
              <span className="italic text-royale-gold">Heritage.</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
              Premium Pilau and Biryani, crafted with patience and tradition. 
              Available exclusively on Fridays and Sundays.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button href={callLink} variant="primary" icon={<Phone size={16} />}>
                Order Now
              </Button>
              <Button href={whatsappLink} variant="secondary" icon={<MessageCircle size={16} />}>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-royale-cream">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] bg-royale-brown/5 w-full overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1200&auto=format&fit=crop" 
                alt="Authentic Spices" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-royale-gold/10 hidden lg:block -z-10"></div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-royale-brown leading-tight">
                Tradition Served <br/>
                <span className="italic text-royale-gold">Faithfully.</span>
              </h2>
              <div className="w-12 h-0.5 bg-royale-brown/20"></div>
            </div>
            
            <div className="space-y-6 text-royale-brown/80 font-light text-lg leading-relaxed">
              <p>
                At Mapenzi Royale, we don't just cook food; we honor a legacy. Our recipes are heirlooms, passed down through generations of Swahili culinarians who understood that true flavor takes time.
              </p>
              <p>
                From the careful selection of whole spices to the slow-cooking process that melds flavors together, every step is deliberate. We bring the authentic coast experience to Nakuru.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-royale-brown/10 pt-8">
              <div>
                <span className="block font-serif text-3xl text-royale-brown">2026</span>
                <span className="text-xs uppercase tracking-widest text-royale-brown/60">Established</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-royale-brown">Nakuru</span>
                <span className="text-xs uppercase tracking-widest text-royale-brown/60">Location</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Availability Section - Grid Refinement */}
      <Section id="availability" className="bg-royale-brown text-royale-cream">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-royale-gold text-xs font-bold tracking-widest uppercase">Weekly Schedule</span>
            <h2 className="font-serif text-4xl md:text-5xl">When We Cook</h2>
          </div>
          <p className="text-white/60 text-sm max-w-xs text-right font-light hidden md:block">
            We operate on a limited schedule to ensure maximum quality and freshness for every single order.
          </p>
        </div>

        <div className="grid grid-cols-7 gap-px bg-white/10 border border-white/10">
          {schedule.map((day) => (
            <div 
              key={day.day}
              className={`
                col-span-1 flex flex-col items-center justify-center py-8 md:py-12 transition-colors duration-300
                ${day.open ? 'bg-royale-gold text-royale-brown' : 'bg-transparent text-white/40'}
              `}
            >
              <span className="text-xs uppercase tracking-widest mb-2 font-medium">{day.day}</span>
              <div className="h-2 w-2 rounded-full mb-2">
                {day.open && <div className="w-full h-full bg-royale-brown animate-pulse rounded-full"></div>}
              </div>
              <span className={`text-[10px] uppercase tracking-wider ${day.open ? 'opacity-100 font-bold' : 'opacity-0'}`}>
                Open
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-between items-center text-xs text-white/50 tracking-wide border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Pre-orders open 24/7</span>
          </div>
          <div className="hidden sm:block text-right">
             Limited quantities available per day.
          </div>
        </div>
      </Section>

      {/* Menu Section */}
      <Section id="menu" className="bg-royale-cream">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-royale-brown/60 uppercase tracking-widest text-xs font-bold">The Royal Menu</span>
          <h2 className="font-serif text-4xl md:text-6xl text-royale-brown">Curated Excellence</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <div key={item.name} className="group flex flex-col h-full bg-white border border-royale-brown/5 hover:border-royale-gold/30 transition-colors duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-4">
                <div className="flex justify-between items-baseline border-b border-royale-brown/10 pb-4">
                  <h3 className="font-serif text-3xl text-royale-brown">{item.name}</h3>
                  <span className="font-sans font-bold text-lg text-royale-gold">{item.price} KSH</span>
                </div>
                <p className="text-royale-brown/70 leading-relaxed font-light flex-grow">
                  {item.description}
                </p>
                <div className="pt-4">
                  <button className="text-xs uppercase tracking-widest font-bold text-royale-brown flex items-center gap-2 group-hover:text-royale-gold transition-colors">
                    Order This Dish <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-royale-brown text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-8">
              <a href="#" className="inline-block font-serif text-3xl tracking-widest font-bold">
                MAPENZI <span className="text-royale-gold">ROYALE</span>
              </a>
              <p className="text-white/60 leading-relaxed max-w-sm font-light">
                Elevating the weekend dining experience in Nakuru with authentic, high-quality Swahili cuisine.
              </p>
              <div className="flex flex-col gap-4 text-sm text-white/80 tracking-wide">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-royale-gold" />
                  <span>Nakuru, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-royale-gold" />
                  <a href={callLink} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 md:p-12 border border-white/10 space-y-8">
              <h3 className="font-serif text-3xl">Reserve Your Plate</h3>
              <p className="text-white/60 font-light">
                Due to our preparation methods, we encourage early orders. 
                Contact us directly to secure your meal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href={callLink} fullWidth>Call Now</Button>
                <Button variant="whatsapp" href={whatsappLink} fullWidth icon={<MessageCircle size={16}/>}>WhatsApp</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Mapenzi Royale.</p>
            <p>Designed with Intention.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-royale-brown/5 md:hidden z-50 flex gap-3">
         <Button href={callLink} variant="primary" fullWidth className="!py-3">
            Call
         </Button>
         <Button href={whatsappLink} variant="whatsapp" fullWidth className="!py-3" icon={<MessageCircle size={16}/>}>
            WhatsApp
         </Button>
      </div>
    </div>
  );
};

export default App;