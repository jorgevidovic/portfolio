export type Lang = "es" | "en" | "fr";

export const t = {
  es: {
    // Navbar
    nav_home:         "Inicio",
    nav_about:        "Experiencia",
    nav_services:     "Servicios",
    nav_projects:     "Proyectos",
    nav_testimonials: "Testimonios",

    // Introducción (Home)
    intro_typing1:     "Desarrollador de software",
    intro_description: "Desarrollo software a medida, abarcando todas las áreas del proyecto.",
    intro_cta_projects:"Proyectos",
    intro_cta_contact: "Contáctame",
    intro_form_title:  "Formulario de Contacto",

    // About / Experiencia
    about_title: "Experiencia",

    // Services / Servicios
    services_title:       "Servicios",
    services_description: "Soy un desarrollador Full Stack con amplia experiencia en el diseño y desarrollo tanto en el Frontend como en el Backend. En el Frontend, manejo aspectos de diseño y desarrollo de interfaces, mientras que en el Backend, me especializo en la arquitectura de sistemas, lógica de negocio y gestión de bases de datos.",
    services_cta:         "Contacta conmigo",
    services_form_title:  "Formulario de Contacto",

    // Projects / Proyectos
    projects_title:        "Proyectos",
    portfolio_modal_visit: "Visitar web",

    // Testimonials / Testimonios
    testimonials_title: "Testimonios",

    // Counters (about page)
    counter_projects: "Proyectos entregados",
    counter_clients:  "Clientes satisfechos",
    counter_years:    "Años de experiencia",

    // Contact form (modal)
    form_email_label:      "Correo Electrónico",
    form_email_error:      "Por favor, introduce un correo electrónico válido.",
    form_name_label:       "Nombre",
    form_name_error:       "El nombre es obligatorio.",
    form_subject_label:    "Asunto",
    form_subject_error:    "El asunto es obligatorio.",
    form_message_label:    "Mensaje",
    form_message_error:    "El mensaje no puede estar vacío.",
    form_submit:           "Enviar",
    form_sending:          "Enviando...",
    form_success_title:    "¡Éxito!",
    form_success_text:     "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
    form_error_prefix:     "Error: ",
    form_connection_error: "Error de conexión. Por favor, verifica tu conexión a internet.",
  },

  en: {
    // Navbar
    nav_home:         "Home",
    nav_about:        "Experience",
    nav_services:     "Services",
    nav_projects:     "Projects",
    nav_testimonials: "Testimonials",

    // Introduction (Home)
    intro_typing1:     "Software Developer",
    intro_description: "I develop custom software, covering all areas of the project.",
    intro_cta_projects:"Projects",
    intro_cta_contact: "Contact me",
    intro_form_title:  "Contact Form",

    // About
    about_title: "Experience",

    // Services
    services_title:       "Services",
    services_description: "I am a Full Stack developer with extensive experience in both Frontend and Backend design and development. On the Frontend I handle interface design, while on the Backend I specialise in systems architecture, business logic and database management.",
    services_cta:         "Contact me",
    services_form_title:  "Contact Form",

    // Projects
    projects_title:        "Projects",
    portfolio_modal_visit: "Visit website",

    // Testimonials
    testimonials_title: "Testimonials",

    // Counters (about page)
    counter_projects: "Delivered projects",
    counter_clients:  "Satisfied clients",
    counter_years:    "Years of experience",

    // Contact form (modal)
    form_email_label:      "Email",
    form_email_error:      "Please enter a valid email address.",
    form_name_label:       "Name",
    form_name_error:       "Name is required.",
    form_subject_label:    "Subject",
    form_subject_error:    "Subject is required.",
    form_message_label:    "Message",
    form_message_error:    "Message cannot be empty.",
    form_submit:           "Send",
    form_sending:          "Sending...",
    form_success_title:    "Success!",
    form_success_text:     "Your message has been sent successfully. We'll get back to you soon.",
    form_error_prefix:     "Error: ",
    form_connection_error: "Connection error. Please check your internet connection.",
  },

  fr: {
    // Navbar
    nav_home:         "Accueil",
    nav_about:        "Expérience",
    nav_services:     "Services",
    nav_projects:     "Projets",
    nav_testimonials: "Témoignages",

    // Introduction (Home)
    intro_typing1:     "Développeur de logiciels",
    intro_description: "Je développe des logiciels sur mesure, couvrant tous les domaines du projet.",
    intro_cta_projects:"Projets",
    intro_cta_contact: "Contactez-moi",
    intro_form_title:  "Formulaire de contact",

    // About
    about_title: "Expérience",

    // Services
    services_title:       "Services",
    services_description: "Je suis un développeur Full Stack avec une vaste expérience en conception et développement Frontend et Backend. En Frontend, je gère la conception et le développement d'interfaces, tandis qu'en Backend je me spécialise dans l'architecture des systèmes, la logique métier et la gestion des bases de données.",
    services_cta:         "Contactez-moi",
    services_form_title:  "Formulaire de contact",

    // Projects
    projects_title:        "Projets",
    portfolio_modal_visit: "Visiter le site",

    // Testimonials
    testimonials_title: "Témoignages",

    // Counters (about page)
    counter_projects: "Projets livrés",
    counter_clients:  "Clients satisfaits",
    counter_years:    "Années d'expérience",

    // Contact form (modal)
    form_email_label:      "Adresse email",
    form_email_error:      "Veuillez saisir une adresse email valide.",
    form_name_label:       "Nom",
    form_name_error:       "Le nom est obligatoire.",
    form_subject_label:    "Sujet",
    form_subject_error:    "Le sujet est obligatoire.",
    form_message_label:    "Message",
    form_message_error:    "Le message ne peut pas être vide.",
    form_submit:           "Envoyer",
    form_sending:          "Envoi en cours...",
    form_success_title:    "Succès !",
    form_success_text:     "Votre message a été envoyé avec succès. Nous vous répondrons bientôt.",
    form_error_prefix:     "Erreur : ",
    form_connection_error: "Erreur de connexion. Veuillez vérifier votre connexion internet.",
  },
} as const;

export type TKeys = keyof typeof t.es;
