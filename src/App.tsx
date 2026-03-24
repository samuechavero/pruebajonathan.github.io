/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Linkedin,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Users,
  Smile,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Carillas', href: '#carillas' },
    { name: 'Antes y Después', href: '#resultados' },
    { name: 'Por qué nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
              INSTYLE<span className="text-emerald-500 font-light">DENTAL</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:7136903368" 
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="tel:7136903368" 
                  className="block w-full text-center bg-blue-900 text-white px-6 py-4 rounded-xl font-bold"
                >
                  Llamar Ahora: (713) 690-3368
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Star size={16} fill="currentColor" />
            <span>4.8 Estrellas en Houston (200+ Reseñas)</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Obtén tu mejor <span className="text-blue-900">sonrisa</span> con atención de élite.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Atención personalizada, tecnología avanzada y un equipo altamente profesional en el corazón de Houston. Especialistas en diseño de sonrisa y salud dental integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center group">
              Agendar Cita Online
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <a href="tel:7136903368" className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:border-blue-900 transition-all flex items-center justify-center">
              <Phone className="mr-2 text-emerald-500" size={20} />
              (713) 690-3368
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-slate-500">
            <div className="flex items-center">
              <CheckCircle2 className="text-emerald-500 mr-2" size={20} />
              <span className="text-sm font-medium">LGBTQ+ Friendly</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-emerald-500 mr-2" size={20} />
              <span className="text-sm font-medium">Tecnología 3D</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
              alt="Clínica Dental Moderna" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] hidden sm:block"
          >
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Smile size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Pacientes Felices</p>
                <p className="text-xl font-bold text-slate-900">+5,000</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-tight">Transformando vidas a través de sonrisas saludables.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Carillas Dentales (Veneers)",
      desc: "Diseño de sonrisa personalizado con carillas de porcelana de alta calidad.",
      icon: <Sparkles className="text-emerald-500" size={32} />,
      color: "bg-emerald-50"
    },
    {
      title: "Implantes Dentales",
      desc: "Restauración permanente y natural para dientes perdidos con tecnología avanzada.",
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      color: "bg-blue-50"
    },
    {
      title: "Odontología Estética",
      desc: "Blanqueamiento y correcciones para una sonrisa radiante y armónica.",
      icon: <Smile className="text-purple-500" size={32} />,
      color: "bg-purple-50"
    },
    {
      title: "Limpiezas Profundas",
      desc: "Cuidado preventivo esencial para mantener tus encías y dientes sanos.",
      icon: <HeartPulse className="text-rose-500" size={32} />,
      color: "bg-rose-50"
    },
    {
      title: "Restauraciones",
      desc: "Coronas, puentes y rellenos estéticos que devuelven la funcionalidad.",
      icon: <CheckCircle2 className="text-amber-500" size={32} />,
      color: "bg-amber-50"
    },
    {
      title: "Consultas Generales",
      desc: "Evaluación integral y planes de tratamiento personalizados para toda la familia.",
      icon: <Users className="text-cyan-500" size={32} />,
      color: "bg-cyan-50"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Nuestros Servicios</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Cuidado dental integral con tecnología de vanguardia.</p>
          <p className="text-lg text-slate-600">Ofrecemos una amplia gama de tratamientos especializados para cubrir todas tus necesidades dentales en un solo lugar.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <button className="text-blue-900 font-bold flex items-center hover:text-emerald-600 transition-colors">
                Saber más <ChevronRight size={18} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VeneersSpotlight = () => {
  return (
    <section id="carillas" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1974" 
              alt="Diseño de Sonrisa con Carillas" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-emerald-400 font-bold uppercase tracking-widest mb-4">Servicio Premium</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Carillas Dentales: La perfección que mereces.</h3>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Transformamos tu sonrisa en solo un par de visitas. Nuestras carillas de porcelana ultrafinas son diseñadas a medida para corregir color, forma y alineación, brindándote un resultado natural y duradero.
          </p>
          
          <ul className="space-y-4 mb-12">
            {[
              "Diseño digital de sonrisa personalizado",
              "Materiales de porcelana de grado médico",
              "Mínimamente invasivo y sin dolor",
              "Resultados visibles en tiempo récord"
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-400" size={16} />
                </div>
                <span className="text-slate-200 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-emerald-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
            Consulta de Diseño de Sonrisa
          </button>
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const cases = [
    {
      title: "Restauración Estética",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2070",
      tag: "Carillas"
    },
    {
      title: "Implante Dental",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2070",
      tag: "Implantes"
    },
    {
      title: "Diseño de Sonrisa",
      image: "https://images.unsplash.com/photo-1460676746863-c8811c21ec33?auto=format&fit=crop&q=80&w=2070",
      tag: "Estética"
    }
  ];

  return (
    <section id="resultados" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Resultados Reales</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900">Transformaciones que inspiran confianza.</p>
          </div>
          <button className="text-blue-900 font-bold flex items-center hover:underline">
            Ver galería completa <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] mb-6 shadow-lg">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {c.tag}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">{c.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      title: "Tecnología Avanzada",
      desc: "Utilizamos escaneo 3D y radiografía digital para diagnósticos precisos y tratamientos menos invasivos.",
      icon: <Sparkles size={24} />
    },
    {
      title: "Experiencia Premium",
      desc: "Nuestras instalaciones están diseñadas para tu comodidad, eliminando el estrés de la visita al dentista.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Inclusividad Total",
      desc: "Somos una clínica orgullosamente LGBTQ+ friendly, brindando un espacio seguro y respetuoso para todos.",
      icon: <Users size={24} />
    },
    {
      title: "Ubicación Conveniente",
      desc: "Situados en Spring Shadows Plaza con amplio estacionamiento y fácil acceso en Houston.",
      icon: <MapPin size={24} />
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Por Qué Elegirnos</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Tu salud dental en manos de expertos apasionados.</p>
            <p className="text-lg text-slate-600 mb-12">
              En Instyle Dental Group, no solo tratamos dientes; cuidamos personas. Nuestro enfoque compasivo y profesional nos ha convertido en la opción preferida de Houston.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <div key={i}>
                  <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                alt="Equipo Dental Profesional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-emerald-500 text-white p-8 rounded-[32px] shadow-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Años de Excelencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "La mejor experiencia dental que he tenido. El equipo es increíblemente profesional y las instalaciones son de primera. Mis carillas quedaron perfectas.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Muy amigables y transparentes con los precios. Me sentí muy cómodo desde el primer momento. Altamente recomendados para implantes.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      text: "Excelente atención al detalle. El diseño de mi sonrisa superó mis expectativas. ¡Gracias Instyle Dental!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#fbbf24" className="text-amber-400" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Lo que dicen nuestros pacientes</h2>
          <p className="text-blue-200">Basado en más de 200 reseñas reales en Google.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-[32px] border border-white/10">
              <p className="text-lg italic mb-6 text-blue-50 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-slate-900">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-blue-300 uppercase tracking-widest">Paciente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[48px] overflow-hidden shadow-xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Visítanos hoy mismo.</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-900 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Ubicación</h4>
                    <p className="text-slate-600">2600 Gessner Rd Ste 226,<br />Houston, TX 77080, EE. UU.<br /><span className="text-sm font-medium text-emerald-600">(Spring Shadows Plaza, Piso 2)</span></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-900 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Teléfono</h4>
                    <a href="tel:7136903368" className="text-slate-600 hover:text-blue-900 transition-colors">(713) 690-3368</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-900 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Horario</h4>
                    <p className="text-slate-600">Lunes - Viernes: 9:00 AM - 6:00 PM<br />Sábados: Previa Cita</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <button className="flex-1 bg-blue-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all">
                  Agendar Cita
                </button>
                <button className="flex-1 bg-white border-2 border-slate-200 text-slate-900 py-4 rounded-2xl font-bold hover:border-blue-900 transition-all">
                  Cómo Llegar
                </button>
              </div>
            </div>

            <div className="relative min-h-[400px] bg-slate-200">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center grayscale opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-2xl text-center max-w-xs animate-bounce">
                  <MapPin className="text-rose-500 mx-auto mb-2" size={32} />
                  <p className="font-bold text-slate-900">Instyle Dental Group</p>
                  <p className="text-xs text-slate-500">Spring Shadows Plaza</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-white mb-6 block">
              INSTYLE<span className="text-emerald-500 font-light">DENTAL</span>
            </span>
            <p className="text-sm leading-relaxed mb-6">
              Comprometidos con la excelencia dental y el bienestar de nuestros pacientes en Houston. Tecnología avanzada y trato humano.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Carillas Dentales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implantes Dentales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Odontología Estética</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limpiezas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Clínica</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Recibe consejos de salud dental y promociones exclusivas.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-slate-900 border border-slate-800 rounded-l-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-xl hover:bg-emerald-500 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest font-medium">
          <p>© 2026 Instyle Dental Group. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <VeneersSpotlight />
        <BeforeAfter />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="tel:7136903368" 
          className="bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 animate-pulse"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
