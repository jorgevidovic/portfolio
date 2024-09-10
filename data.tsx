import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Youtube, Pencil, Computer, Speech, Github, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@JorgeVidovic",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jorgevidovic/",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/jorgevidovic/",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/jorgevidovic",
    },
    {
        id: 5,
        logo: <FaTiktok />,
        src: "https://www.tiktok.com/@jorgevidovic",
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
        title: "Desarrollador Full Stack",
        subtitle: "Inteco Ingenieria Avanzada S.L.",
        description: "Desarrollo Full Stack, abarcando todas las areas de desarrollo de producto, utilizando tecnologías .NET",
        date: "Actualidad",
    },
    {
        id: 2,
        title: "Desarrollador Full Stack",
        subtitle: "Freelancer - Vidovic Systems",
        description: "Desarrollo Full Stack y diseño de producto basado en los requerimientos del cliente.",
        date: "Actualidad",
    },

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 7,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Pencil />,
        title: "Frontend",
        description: "Desarrollo profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Backend",
        description: "Diseño y desarrollo de backends y API's, adaptadas a tus necesidades",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Ediciones Clío",
        description:"",
        image: "/edicionesclio.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "ADD2Q",
        description:"",
        image: "/add2q.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Galistore",
        description:"",
        image: "/galistore.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Dr. Reyber Parra - Cronista de Maracibo",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    },
    {
        id: 2,
        name: "Nestor Osechas - Director de Galistore",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    },
    {
        id: 3,
        name: "Brais Rodriguez - Cofundador del Mesón Delfín",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    },
    {
        id: 4,
        name: "Dr. Jorge Villasmil - Director de Multiverso Journal",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    },
];