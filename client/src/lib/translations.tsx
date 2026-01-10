import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      nosotros: "Nosotros",
      tarifas: "Tarifas",
      opiniones: "Opiniones",
      contacto: "Contacto",
    },
    hero: {
      title1: "Transporte",
      title2: "exclusivo",
      title3: "para tu mascota",
      subtitle: "Viajes seguros, cómodos y con mucho cariño. Porque tu mascota merece viajar como un VIP.",
      cta1: "Solicitar presupuesto",
      cta2: "Ver servicios",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Ofrecemos una amplia gama de servicios de transporte adaptados a las necesidades de tu mascota",
      airport: {
        title: "Traslados Aeropuerto",
        description: "Recogemos y llevamos a tu mascota al aeropuerto con toda la documentación necesaria.",
      },
      vet: {
        title: "Veterinario y Peluquería",
        description: "Llevamos a tu mascota a sus citas médicas y de estética.",
      },
      urban: {
        title: "Viajes Urbanos",
        description: "Traslados dentro de la ciudad de Barcelona y área metropolitana.",
      },
      vacation: {
        title: "Vacaciones",
        description: "Llevamos a tu mascota a tu segunda residencia o lugar de vacaciones.",
      },
      events: {
        title: "Exposiciones y Concursos",
        description: "Transporte especializado para eventos caninos y felinos.",
      },
      longDistance: {
        title: "Larga Distancia",
        description: "Viajes a cualquier punto de España y Europa.",
      },
    },
    experiences: {
      title: "Experiencias que nos definen",
      subtitle: "Cada viaje es una historia de cuidado y dedicación",
      exp1: {
        title: "Viajes a la playa",
        description: "Llevamos a tu mascota a disfrutar de las mejores playas dog-friendly de la costa.",
      },
      exp2: {
        title: "Interior de la furgoneta",
        description: "Espacio amplio, climatizado y seguro para que tu mascota viaje cómoda.",
      },
    },
    about: {
      title: "Sobre Nosotros",
      subtitle: "Pasión por las mascotas y compromiso con su bienestar",
      text1: "Somos un servicio de transporte especializado en mascotas, nacido de la pasión por los animales y la necesidad de ofrecer un servicio de calidad en Barcelona.",
      text2: "Contamos con vehículos adaptados, climatizados y equipados con todo lo necesario para que tu mascota viaje segura y cómoda.",
      feature1: {
        title: "Seguridad Garantizada",
        description: "Vehículos equipados con sistemas de seguridad específicos para mascotas.",
      },
      feature2: {
        title: "Experiencia",
        description: "Años de experiencia en el transporte y cuidado de todo tipo de mascotas.",
      },
      feature3: {
        title: "Amor por los Animales",
        description: "Tratamos a cada mascota como si fuera nuestra propia familia.",
      },
    },
    pricing: {
      title: "Tarifas",
      subtitle: "Precios transparentes y competitivos",
      from: "Desde",
      urban: {
        title: "Urbano",
        description: "Barcelona ciudad",
        price: "25€",
      },
      metro: {
        title: "Metropolitano",
        description: "Área metropolitana",
        price: "35€",
      },
      interurban: {
        title: "Interurbano",
        description: "Cataluña",
        price: "50€",
      },
      longDistance: {
        title: "Larga Distancia",
        description: "España y Europa",
        price: "Consultar",
      },
      note: "Los precios pueden variar según distancia, horario y características del servicio. Solicita presupuesto sin compromiso.",
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle: "La satisfacción de nuestros clientes es nuestra mejor carta de presentación",
    },
    schedule: {
      title: "Horario de Atención",
      subtitle: "Estamos disponibles para ti y tu mascota",
      weekdays: "Lunes a Viernes",
      weekdaysHours: "8:00 - 20:00",
      saturday: "Sábados",
      saturdayHours: "9:00 - 14:00",
      emergency: "Urgencias",
      emergencyText: "24 horas",
      emergencyNote: "Para servicios fuera de horario o urgencias, contáctanos por WhatsApp.",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes alguna pregunta? Estamos aquí para ayudarte",
      form: {
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        send: "Enviar mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com",
        phonePlaceholder: "Tu teléfono",
        messagePlaceholder: "¿En qué podemos ayudarte?",
      },
      info: {
        phone: "Teléfono",
        callUs: "Llámanos",
        whatsapp: "WhatsApp",
        writeUs: "Escríbenos por WhatsApp",
        serviceArea: "Zona de servicio",
        serviceAreaText: "Barcelona ciudad, área metropolitana y toda Cataluña. También realizamos viajes de larga distancia a cualquier punto de España y Europa. Consulta tu ruta sin compromiso.",
      },
    },
    footer: {
      description: "Transporte privado y personalizado para mascotas. Seguridad, comodidad y mucho cariño en cada viaje.",
      services: "Servicios",
      serviceList: [
        "Traslados aeropuerto",
        "Veterinario y peluquería",
        "Viajes urbanos e interurbanos",
        "Vacaciones y segunda residencia",
        "Exposiciones y concursos",
        "Viajes de larga distancia",
      ],
      contact: "Contacto",
      location: "Barcelona y alrededores",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      servicios: "Services",
      nosotros: "About Us",
      tarifas: "Pricing",
      opiniones: "Reviews",
      contacto: "Contact",
    },
    hero: {
      title1: "Exclusive",
      title2: "transport",
      title3: "for your pet",
      subtitle: "Safe, comfortable journeys with lots of love. Because your pet deserves to travel like a VIP.",
      cta1: "Request a quote",
      cta2: "View services",
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a wide range of transport services tailored to your pet's needs",
      airport: {
        title: "Airport Transfers",
        description: "We pick up and take your pet to the airport with all necessary documentation.",
      },
      vet: {
        title: "Vet & Grooming",
        description: "We take your pet to their medical and grooming appointments.",
      },
      urban: {
        title: "Urban Trips",
        description: "Transfers within Barcelona city and metropolitan area.",
      },
      vacation: {
        title: "Vacations",
        description: "We take your pet to your second home or vacation destination.",
      },
      events: {
        title: "Shows & Competitions",
        description: "Specialized transport for dog and cat events.",
      },
      longDistance: {
        title: "Long Distance",
        description: "Trips to anywhere in Spain and Europe.",
      },
    },
    experiences: {
      title: "Experiences that define us",
      subtitle: "Every trip is a story of care and dedication",
      exp1: {
        title: "Beach trips",
        description: "We take your pet to enjoy the best dog-friendly beaches on the coast.",
      },
      exp2: {
        title: "Van interior",
        description: "Spacious, climate-controlled and safe space for your pet to travel comfortably.",
      },
    },
    about: {
      title: "About Us",
      subtitle: "Passion for pets and commitment to their wellbeing",
      text1: "We are a pet transport service born from a passion for animals and the need to offer quality service in Barcelona.",
      text2: "We have adapted, climate-controlled vehicles equipped with everything necessary for your pet to travel safely and comfortably.",
      feature1: {
        title: "Guaranteed Safety",
        description: "Vehicles equipped with pet-specific safety systems.",
      },
      feature2: {
        title: "Experience",
        description: "Years of experience in transporting and caring for all types of pets.",
      },
      feature3: {
        title: "Love for Animals",
        description: "We treat every pet as if it were our own family.",
      },
    },
    pricing: {
      title: "Pricing",
      subtitle: "Transparent and competitive prices",
      from: "From",
      urban: {
        title: "Urban",
        description: "Barcelona city",
        price: "€25",
      },
      metro: {
        title: "Metropolitan",
        description: "Metropolitan area",
        price: "€35",
      },
      interurban: {
        title: "Interurban",
        description: "Catalonia",
        price: "€50",
      },
      longDistance: {
        title: "Long Distance",
        description: "Spain and Europe",
        price: "Contact us",
      },
      note: "Prices may vary depending on distance, schedule and service characteristics. Request a quote with no obligation.",
    },
    testimonials: {
      title: "What our clients say",
      subtitle: "Our clients' satisfaction is our best introduction",
    },
    schedule: {
      title: "Business Hours",
      subtitle: "We're available for you and your pet",
      weekdays: "Monday to Friday",
      weekdaysHours: "8:00 AM - 8:00 PM",
      saturday: "Saturdays",
      saturdayHours: "9:00 AM - 2:00 PM",
      emergency: "Emergencies",
      emergencyText: "24 hours",
      emergencyNote: "For after-hours services or emergencies, contact us via WhatsApp.",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a question? We're here to help",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "Your phone",
        messagePlaceholder: "How can we help you?",
      },
      info: {
        phone: "Phone",
        callUs: "Call us",
        whatsapp: "WhatsApp",
        writeUs: "Write us on WhatsApp",
        serviceArea: "Service area",
        serviceAreaText: "Barcelona city, metropolitan area and all of Catalonia. We also make long-distance trips to anywhere in Spain and Europe. Ask about your route with no obligation.",
      },
    },
    footer: {
      description: "Private and personalized pet transport. Safety, comfort and lots of love on every trip.",
      services: "Services",
      serviceList: [
        "Airport transfers",
        "Vet and grooming",
        "Urban and interurban trips",
        "Vacations and second home",
        "Shows and competitions",
        "Long distance trips",
      ],
      contact: "Contact",
      location: "Barcelona and surroundings",
      rights: "All rights reserved.",
    },
  },
} as const;

type TranslationType = typeof translations.es;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
