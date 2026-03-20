import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Youtube,
  Pencil,
  Computer,
  Megaphone,
  Speech,
  Github,
  Instagram,
  Database,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/@JorgeVidovic",
    name: "YouTube",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/jorgevidovic/",
    name: "LinkedIn",
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/jorgevidovic/",
    name: "Instagram",
  },
  {
    id: 4,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/jorgevidovic",
    name: "GitHub",
  },
  {
    id: 5,
    logo: <FaTiktok />,
    src: "https://www.tiktok.com/@jorgevidovic",
    name: "TikTok",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "About",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Projects",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/projects",
  },
  {
    id: 5,
    title: "Testimonials",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    date: "2021 - Actualidad",
    es: {
      title: "CEO · Full Stack Developer",
      subtitle: "Vidovic Systems",
      description:
        "Dirección y desarrollo de proyectos de software y marketing digital. Diseño de arquitecturas, gestión de clientes y entrega de soluciones digitales integrales.",
    },
    en: {
      title: "CEO · Full Stack Developer",
      subtitle: "Vidovic Systems",
      description:
        "Leadership and development of software and digital marketing projects. Architecture design, client management and delivery of integrated digital solutions.",
    },
    fr: {
      title: "PDG · Développeur Full Stack",
      subtitle: "Vidovic Systems",
      description:
        "Direction et développement de projets logiciels et marketing digital. Conception d'architectures, gestion des clients et livraison de solutions numériques intégrées.",
    },
  },
  {
    id: 2,
    date: "2024 - Actualidad",
    es: {
      title: "Desarrollador Full Stack",
      subtitle: "Inteco Ingeniería Avanzada S.L.",
      description:
        "Desarrollo Full Stack abarcando todas las áreas de desarrollo de producto, utilizando tecnologías .NET y arquitecturas empresariales escalables.",
    },
    en: {
      title: "Full Stack Developer",
      subtitle: "Inteco Ingeniería Avanzada S.L.",
      description:
        "Full Stack development covering all areas of product development, using .NET technologies and scalable enterprise architectures.",
    },
    fr: {
      title: "Développeur Full Stack",
      subtitle: "Inteco Ingeniería Avanzada S.L.",
      description:
        "Développement Full Stack couvrant tous les domaines du développement produit, en utilisant les technologies .NET et des architectures d'entreprise évolutives.",
    },
  },
];

export const dataCounter = [
  { id: 0, endCounter: 5,   suffix: "+", lineRight: true,  lineRightMobile: true  },
  { id: 1, endCounter: 100, suffix: "%", lineRight: true,  lineRightMobile: true  },
  { id: 2, endCounter: 5,   suffix: "+", lineRight: false, lineRightMobile: false },
];

export const serviceData = [
  {
    id: 1,
    icon: <Pencil />,
    es: {
      title: "Desarrollo de Software",
      description:
        "Aplicaciones web y móviles a medida con React, Next.js y .NET. Código limpio, arquitecturas escalables y entregas ágiles.",
    },
    en: {
      title: "Software Development",
      description:
        "Custom web and mobile applications with React, Next.js and .NET. Clean code, scalable architectures and agile deliveries.",
    },
    fr: {
      title: "Développement Logiciel",
      description:
        "Applications web et mobiles sur mesure avec React, Next.js et .NET. Code propre, architectures évolutives et livraisons agiles.",
    },
  },
  {
    id: 2,
    icon: <Megaphone />,
    es: {
      title: "Marketing Digital",
      description:
        "Estrategias orientadas a resultados: SEO, campañas de pago en Google y Meta, email marketing y analítica avanzada.",
    },
    en: {
      title: "Digital Marketing",
      description:
        "Results-oriented strategies: SEO, paid campaigns on Google and Meta, email marketing and advanced analytics.",
    },
    fr: {
      title: "Marketing Digital",
      description:
        "Stratégies orientées résultats : SEO, campagnes payantes sur Google et Meta, email marketing et analytique avancée.",
    },
  },
  {
    id: 3,
    icon: <Computer />,
    es: {
      title: "Diseño & Branding",
      description:
        "Identidad visual coherente y diseño UX/UI que comunica profesionalismo y genera confianza desde el primer clic.",
    },
    en: {
      title: "Design & Branding",
      description:
        "Coherent visual identity and UX/UI design that communicates professionalism and builds trust from the first click.",
    },
    fr: {
      title: "Design & Branding",
      description:
        "Identité visuelle cohérente et design UX/UI qui communique le professionnalisme et inspire confiance dès le premier clic.",
    },
  },
];

export const dataPortfolio = [
  {
    id: 1,
    image: "/meson-delfin-logo.png",
    urlDemo: "https://mesondelfin.com/",
    urlGithub: "#!",
    tags: ["Web Development", "Social Media", "Paid Ads"],
    es: {
      title: "Mesón Delfín",
      description:
        "Mesón Delfín es un referente gastronómico en Vigo, conocido por su churrasco a la brasa y un ambiente familiar junto al estadio de Balaídos. Diseñamos y desarrollamos su sitio web, gestionamos sus redes sociales con contenido auténtico y llevamos sus campañas de pago en Google y Meta para captar nuevos comensales.",
    },
    en: {
      title: "Mesón Delfín",
      description:
        "Mesón Delfín is a gastronomic landmark in Vigo, famous for its chargrilled churrasco and warm family atmosphere near the Balaídos stadium. We designed and developed their website, managed their social media with authentic content, and ran paid campaigns on Google and Meta to attract new diners.",
    },
    fr: {
      title: "Mesón Delfín",
      description:
        "Mesón Delfín est une référence gastronomique à Vigo, connue pour son churrasco grillé et son ambiance familiale près du stade de Balaídos. Nous avons conçu leur site web, géré leurs réseaux sociaux avec du contenu authentique et mené des campagnes payantes sur Google et Meta.",
    },
  },
  {
    id: 2,
    image: "/delfin-delivery-logo.png",
    urlDemo: "https://delfindelivery.com",
    urlGithub: "#!",
    tags: ["Web Development", "Social Media", "Paid Ads"],
    es: {
      title: "Delfín Delivery",
      description:
        "Plataforma web, redes sociales y publicidad digital para el servicio de comida gallega a domicilio de Vigo. Desarrollamos su sitio en delfindelivery.com, gestionamos sus redes sociales y llevamos campañas de pago orientadas a la conversión inmediata.",
    },
    en: {
      title: "Delfín Delivery",
      description:
        "Web platform, social media and digital advertising for Vigo's authentic Galician home delivery service. We developed their website at delfindelivery.com, managed their social media and ran conversion-focused paid campaigns.",
    },
    fr: {
      title: "Delfín Delivery",
      description:
        "Site web, réseaux sociaux et publicité digitale pour le service de livraison de cuisine galicienne à Vigo. Nous avons développé leur site sur delfindelivery.com, géré leurs réseaux sociaux et piloté des campagnes publicitaires axées sur la conversion.",
    },
  },
  {
    id: 3,
    image: "/edicionesclio-logo.jpg",
    urlDemo: "https://edicionesclio.com",
    urlGithub: "#!",
    tags: ["Web Development", "Social Media", "Paid Ads", "Sysadmin"],
    es: {
      title: "Ediciones Clío",
      description:
        "Editorial académica independiente en Vigo. Nuestro trabajo abarca desarrollo web, gestión de redes sociales, campañas de publicidad digital y administración de sistemas para edicionesclio.com, revistaclio.es y revistaceres.com.",
    },
    en: {
      title: "Ediciones Clío",
      description:
        "Independent academic publisher in Vigo. Our work covers web development, social media management, digital advertising campaigns and systems administration for edicionesclio.com, revistaclio.es and revistaceres.com.",
    },
    fr: {
      title: "Ediciones Clío",
      description:
        "Éditeur académique indépendant à Vigo. Notre travail couvre le développement web, la gestion des réseaux sociaux, les campagnes publicitaires digitales et l'administration des systèmes pour edicionesclio.com, revistaclio.es et revistaceres.com.",
    },
  },
];

export const dataTestimonials = [
  {
    id: 1,
    es: {
      name: "Dr. Reyber Parra — Cronista de Maracaibo",
      description:
        "El trabajo de Jorge nos ha ayudado a hacer de nuestros proyectos tecnológicos más escalables y sostenibles. ¡Altamente recomendado!",
    },
    en: {
      name: "Dr. Reyber Parra — Chronicler of Maracaibo",
      description:
        "Jorge's work has helped us make our technology projects more scalable and sustainable. Highly recommended!",
    },
    fr: {
      name: "Dr. Reyber Parra — Chroniqueur de Maracaibo",
      description:
        "Le travail de Jorge nous a aidés à rendre nos projets technologiques plus évolutifs et durables. Fortement recommandé !",
    },
  },
  {
    id: 2,
    es: {
      name: "Nestor Osechas — Director de Galistore",
      description:
        "El trabajo de Jorge con Galistore nos ha permitido sistematizar y gestionar nuestras ventas, optimizando la productividad de nuestro equipo de trabajo.",
    },
    en: {
      name: "Nestor Osechas — Director of Galistore",
      description:
        "Jorge's work with Galistore has allowed us to systematize and manage our sales, optimizing our team's productivity.",
    },
    fr: {
      name: "Nestor Osechas — Directeur de Galistore",
      description:
        "Le travail de Jorge avec Galistore nous a permis de systématiser et gérer nos ventes, optimisant la productivité de notre équipe.",
    },
  },
  {
    id: 3,
    es: {
      name: "Brais Rodríguez — Cofundador del Mesón Delfín",
      description:
        "Jorge ha sido un gran aliado en el desarrollo de nuestra plataforma de ventas. Su trabajo ha sido clave para el crecimiento de nuestro negocio.",
    },
    en: {
      name: "Brais Rodríguez — Co-founder of Mesón Delfín",
      description:
        "Jorge has been a great partner in developing our sales platform. His work has been key to the growth of our business.",
    },
    fr: {
      name: "Brais Rodríguez — Co-fondateur du Mesón Delfín",
      description:
        "Jorge a été un excellent partenaire dans le développement de notre plateforme de vente. Son travail a été déterminant pour la croissance de notre entreprise.",
    },
  },
  {
    id: 4,
    es: {
      name: "Dr. Jorge Villasmil — Director de Multiverso Journal",
      description:
        "El trabajo de Jorge ha sido clave para la digitalización de nuestra revista. Su trabajo ha sido de gran calidad y profesionalismo.",
    },
    en: {
      name: "Dr. Jorge Villasmil — Director of Multiverso Journal",
      description:
        "Jorge's work has been key to the digitalization of our journal. His work has been of great quality and professionalism.",
    },
    fr: {
      name: "Dr. Jorge Villasmil — Directeur de Multiverso Journal",
      description:
        "Le travail de Jorge a été déterminant pour la numérisation de notre revue. Son travail a été d'une grande qualité et d'un grand professionnalisme.",
    },
  },
];
