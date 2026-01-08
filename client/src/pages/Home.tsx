import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  PawPrint, 
  Car, 
  Plane, 
  Heart, 
  Mountain, 
  Waves, 
  Star, 
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Shield,
  Users,
  TreePine
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import heroImage from "@assets/generated_images/happy_dog_in_transport_van.png";
import vanInterior from "@assets/generated_images/pet_van_interior_setup.png";
import beachImage from "@assets/generated_images/dog-friendly_spanish_beach.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#tarifas", label: "Tarifas" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2" data-testid="link-home">
            <PawPrint className="w-8 h-8 text-primary" />
            <span className="font-display text-xl md:text-2xl font-bold text-foreground">
              Chofer<span className="text-primary">MASCOTAS</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:609439889" className="flex items-center gap-2 text-primary font-semibold" data-testid="link-phone-nav">
              <Phone className="w-4 h-4" />
              609 43 98 89
            </a>
          </div>
          
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="tel:609439889" 
              className="flex items-center gap-2 py-3 text-primary font-semibold"
              data-testid="link-phone-mobile"
            >
              <Phone className="w-4 h-4" />
              609 43 98 89
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mascota feliz en transporte" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto section-padding py-20">
        <motion.div 
          className="max-w-2xl"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <PawPrint className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Transporte especializado para mascotas
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Tu mascota viaja <span className="text-gradient">segura y feliz</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Servicio de transporte privado y personalizado en Barcelona y alrededores. 
            Porque tu compañero peludo merece viajar con la misma comodidad y cariño que en casa.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
              data-testid="button-hero-quote"
            >
              <a href="#contacto">Pedir presupuesto</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-semibold border-2"
              asChild
              data-testid="button-hero-phone"
            >
              <a href="tel:609439889" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Trato personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Disponible todos los días</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <a 
        href="#servicios" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        data-testid="link-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Plane,
      title: "Traslados aeropuerto",
      description: "Recogemos y llevamos a tu mascota al aeropuerto, estación de tren o puerto. Servicio puntual y sin estrés."
    },
    {
      icon: Heart,
      title: "Veterinario y peluquería",
      description: "La llevamos a sus citas médicas, vacunas, revisiones o sesiones de peluquería y spa canino."
    },
    {
      icon: Car,
      title: "Rutas urbanas e interurbanas",
      description: "Desplazamientos dentro de Barcelona y a poblaciones cercanas. Flexibilidad total de horarios."
    },
    {
      icon: MapPin,
      title: "Segunda residencia y vacaciones",
      description: "Viajes a hoteles, casas rurales, destinos de vacaciones. Tu mascota llega descansada y contenta."
    },
    {
      icon: Star,
      title: "Exposiciones y concursos",
      description: "Transporte especializado para eventos caninos. Tu campeón llega en perfectas condiciones."
    },
    {
      icon: Mountain,
      title: "Viajes de larga distancia",
      description: "Rutas largas con paradas para pasear, beber agua y descansar. Comunicación constante durante el trayecto."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Nuestros servicios</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Todo lo que tu mascota necesita
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos un servicio completo de transporte adaptado a cada situación. 
            Con cariño, profesionalidad y la máxima seguridad.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full bg-background border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Experiencias especiales</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Aventuras con tu mejor amigo
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Además del transporte habitual, organizamos excursiones y escapadas a lugares 
              increíbles donde tu mascota puede disfrutar al máximo. Conocemos los mejores 
              sitios gracias a nuestras propias experiencias con nuestros perros.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Waves className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Playas dog-friendly</h4>
                  <p className="text-muted-foreground text-sm">Las mejores playas donde tu perro puede bañarse y correr libre.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <PawPrint className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Aquapark Canino</h4>
                  <p className="text-muted-foreground text-sm">Parque acuático para perros en La Roca del Vallès. ¡Diversión garantizada!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TreePine className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Parques naturales y montaña</h4>
                  <p className="text-muted-foreground text-sm">Excursiones a ríos, lagos, cascadas y rutas de montaña.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={beachImage} 
                alt="Playa dog-friendly en España" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">+500</p>
                  <p className="text-sm text-muted-foreground">Viajes realizados</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={vanInterior} 
                alt="Interior de la furgoneta adaptada para mascotas" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Sobre nosotros</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Amor por los animales y profesionalidad
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ChoferMASCOTAS nació de la pasión por los animales y la necesidad de ofrecer 
              un transporte de calidad para nuestras mascotas. Sabemos lo importante que es 
              para ti que tu compañero viaje tranquilo y seguro.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contamos con un vehículo totalmente adaptado: cómodo, limpio, climatizado y 
              equipado con todo lo necesario para que el viaje sea una experiencia agradable. 
              Si tu mascota viaja sola, te mantenemos informado durante todo el trayecto.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-2xl border border-border">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">Vehículo adaptado</p>
                <p className="text-sm text-muted-foreground">Seguridad total</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">Trato personalizado</p>
                <p className="text-sm text-muted-foreground">Cada mascota es única</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="tarifas" className="py-24">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Tarifas</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Precios claros y transparentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tarifas orientativas para traslados al aeropuerto (solo ida). 
            Consulta sin compromiso para rutas personalizadas.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Barcelona ciudad</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Diurno (8:00 - 20:00)</span>
                    </div>
                    <span className="font-bold text-2xl text-primary" data-testid="text-price-bcn-day">25 €</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Nocturno (20:00 - 8:00)</span>
                    </div>
                    <span className="font-bold text-2xl text-primary" data-testid="text-price-bcn-night">55 €</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full bg-card border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Área metropolitana</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Diurno (8:00 - 20:00)</span>
                    </div>
                    <span className="font-bold text-2xl text-accent" data-testid="text-price-metro-day">30 €</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Nocturno (20:00 - 8:00)</span>
                    </div>
                    <span className="font-bold text-2xl text-accent" data-testid="text-price-metro-night">65 €</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-muted/50 border-border">
            <CardContent className="p-6 md:p-8">
              <h4 className="font-display text-lg font-bold mb-4">Condiciones y suplementos</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Precios para radio de 15 km desde el punto de origen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Peajes no incluidos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Km adicional diurno: 1,20 €/km
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Km adicional nocturno: 1,45 €/km
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Sábados a partir de las 15:00, noches, domingos y festivos: +10 € por trayecto
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Servicio nocturno: reserva con 48h de antelación
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      date: "Octubre 2025",
      text: "Llevaron a mi perrita Luna al veterinario mientras yo estaba en el trabajo. Me enviaron fotos durante todo el trayecto y la trataron con un cariño increíble. Volveré a repetir seguro.",
      rating: 5
    },
    {
      name: "Carlos Martínez",
      date: "Septiembre 2025",
      text: "Necesitaba trasladar a mis dos gatos al aeropuerto para un vuelo internacional. Fueron puntuales, profesionales y muy cuidadosos. Los gatos llegaron tranquilos y sin estrés. Muy recomendable.",
      rating: 5
    },
    {
      name: "Ana López",
      date: "Agosto 2025",
      text: "Contraté el servicio para llevar a mi bulldog francés a nuestra casa de la playa. El viaje fue largo pero hicieron paradas para que pudiera pasear y beber agua. Llegó feliz y descansado.",
      rating: 5
    },
    {
      name: "Pedro Ruiz",
      date: "Julio 2025",
      text: "Excelente servicio. Mi perro Max es muy nervioso en los coches pero el conductor supo calmarlo y tratarlo con mucha paciencia. Se nota que aman a los animales de verdad.",
      rating: 5
    }
  ];

  return (
    <section id="opiniones" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Opiniones</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            La confianza de las familias que han viajado con nosotros es nuestra mejor carta de presentación.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full bg-background border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic" data-testid={`text-testimonial-${index}`}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <PawPrint className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Horario de servicio
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6" />
                  <div>
                    <p className="font-semibold text-lg">Diurno</p>
                    <p className="text-white/80">Todos los días de 8:00 a 20:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6" />
                  <div>
                    <p className="font-semibold text-lg">Nocturno</p>
                    <p className="text-white/80">De 20:00 a 8:00 (reserva con 48h de antelación)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6" />
                  <div>
                    <p className="font-semibold text-lg">Fines de semana y festivos</p>
                    <p className="text-white/80">Disponible con suplemento</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg mb-4 text-white/90">¿Necesitas un traslado?</p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
                asChild
                data-testid="button-schedule-contact"
              >
                <a href="#contacto">Contactar ahora</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contacto</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Pide tu presupuesto sin compromiso
          </h2>
          <p className="text-lg text-muted-foreground">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas. 
            También puedes llamarnos directamente.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background border-border h-full">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4">¡Mensaje enviado!</h3>
                    <p className="text-muted-foreground">
                      Gracias por contactar con nosotros. Te responderemos lo antes posible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <Input 
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="bg-background"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input 
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="bg-background"
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Teléfono</label>
                        <Input 
                          type="tel"
                          placeholder="600 000 000"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-background"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje</label>
                      <Textarea 
                        placeholder="Cuéntanos qué necesitas: tipo de mascota, origen, destino, fecha..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={5}
                        className="bg-background"
                        data-testid="input-message"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 rounded-full py-6 text-lg font-semibold"
                      data-testid="button-submit-contact"
                    >
                      Enviar mensaje
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold mb-6">Contacto directo</h3>
                <div className="space-y-6">
                  <a 
                    href="tel:609439889" 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                    data-testid="link-phone-contact"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono / WhatsApp</p>
                      <p className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">609 43 98 89</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:info@chofermascotas.com" 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-colors group"
                    data-testid="link-email-contact"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">info@chofermascotas.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/34609439889" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/5 hover:bg-green-500/10 transition-colors group"
                    data-testid="link-whatsapp-contact"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-bold text-lg text-foreground group-hover:text-green-600 transition-colors">Escríbenos por WhatsApp</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold mb-4">Zona de servicio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Barcelona ciudad, área metropolitana y toda Cataluña. 
                  También realizamos viajes de larga distancia a cualquier punto de España y Europa. 
                  Consulta tu ruta sin compromiso.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl font-bold">
                Chofer<span className="text-primary">MASCOTAS</span>
              </span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transporte privado y personalizado para mascotas. 
              Seguridad, comodidad y mucho cariño en cada viaje.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/70">
              <li>Traslados aeropuerto</li>
              <li>Veterinario y peluquería</li>
              <li>Viajes urbanos e interurbanos</li>
              <li>Vacaciones y segunda residencia</li>
              <li>Exposiciones y concursos</li>
              <li>Viajes de larga distancia</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:609439889" className="hover:text-primary transition-colors">609 43 98 89</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@chofermascotas.com" className="hover:text-primary transition-colors">info@chofermascotas.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Barcelona y alrededores</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} ChoferMASCOTAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Experiences />
      <AboutUs />
      <Pricing />
      <Testimonials />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}
