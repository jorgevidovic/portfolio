# Jorge Vidovic — Portfolio

Portfolio personal de **Jorge Vidovic**, desarrollador Full Stack y CEO de [Vidovic Systems](https://vidovic.systems). Construido con Next.js 16, presenta proyectos reales, experiencia profesional y testimonios de clientes, con soporte completo de **tres idiomas** (Español, English, Français).

---

## Características

- **Multi-idioma** — ES / EN / FR mediante un store global reactivo (sin next-intl ni middleware); selector de idioma con banderas en el header.
- **Tema oscuro** — Paleta oscura (`#06060e`) con acento naranja (`#f5741c`), tarjetas glass surface (`#0e0e1c`), tipografía Geist y transiciones suaves.
- **Partículas interactivas** — Hero animado con tsParticles (optimizado para móvil: 30 partículas vs 80 en escritorio).
- **Transiciones de página** — Wipe horizontal con Framer Motion en color de marca, con capa de acento naranja.
- **Carrusel de servicios** — Swiper con paginación; muestra Desarrollo de Software, Marketing Digital y Diseño & Branding.
- **Portfolio de proyectos** — 3 proyectos reales (Mesón Delfín, Delfín Delivery, Ediciones Clío) con descripción resumida en la card, modal con descripción completa y enlace a demo.
- **Testimonios** — Carrusel de 4 testimonios de clientes reales, traducidos a los 3 idiomas.
- **Formulario de contacto** — Modal oscuro con validación cliente/servidor, protección XSS, rate limiting y envío vía Resend. Email con plantilla HTML de marca.
- **SEO completo** — Metadatos Open Graph, Twitter Card, sitemap dinámico y robots.txt.
- **Seguridad** — Headers HTTP estrictos (HSTS, X-Frame-Options, CSP, etc.).

---

## Stack

| Categoría       | Tecnología                                        |
|-----------------|---------------------------------------------------|
| Framework       | Next.js 16 (App Router, TypeScript, Turbopack)    |
| UI              | React 19                                          |
| Estilos         | Tailwind CSS v4 (config CSS-first via `@theme`)   |
| Animaciones     | Framer Motion 12, react-type-animation            |
| Partículas      | @tsparticles/react + @tsparticles/slim            |
| Carrusel        | Swiper 12                                         |
| Contadores      | react-countup                                     |
| Iconos          | Lucide React, React Icons                         |
| Email           | Resend 6                                          |
| Analytics       | Google Analytics (@next/third-parties)            |

---

## Estructura de rutas

```
/               → Home (hero + partículas + introducción)
/about          → Experiencia (contadores animados + timeline)
/services       → Servicios (slider Swiper)
/projects       → Proyectos (grid con preview de descripción)
/testimonials   → Testimonios (carrusel con citas)
```

---

## Variables de entorno

Crea un archivo `.env.local` en la raíz con:

```env
RESEND_API_KEY=tu_clave_de_resend
```

Obtén tu API key en [resend.com/api-keys](https://resend.com/api-keys). En Vercel configúrala en **Settings → Environment Variables**.

---

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Despliegue

El proyecto se despliega automáticamente en **Vercel** al hacer push a `main`.

---

## Proyectos incluidos

| Proyecto        | Tipo                                     | Demo                                                 |
|-----------------|------------------------------------------|------------------------------------------------------|
| Mesón Delfín    | Web · Social Media · Paid Ads            | [mesondelfin.com](https://mesondelfin.com)           |
| Delfín Delivery | Web · Social Media · Paid Ads            | [delfindelivery.com](https://delfindelivery.com)     |
| Ediciones Clío  | Web · Social · Paid Ads · Sysadmin       | [edicionesclio.com](https://edicionesclio.com)       |

---

## i18n — Sistema de traducción

Sin dependencias externas. Store global con suscriptores a nivel de módulo en `app/lib/LangContext.tsx`. Todas las cadenas están en `app/lib/i18n.ts` con claves tipadas (`TKeys`).

```ts
const { lang, setLang, tr } = useLang();
tr("projects_title") // → "Proyectos" | "Projects" | "Projets"
```

---

© Jorge Vidovic — [jorgevidovic.com](https://jorgevidovic.com)
