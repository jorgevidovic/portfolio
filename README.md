# Jorge Vidovic — Portfolio

Portfolio personal de **Jorge Vidovic**, desarrollador Full Stack y CEO de [Vidovic Systems](https://vidovic.systems). Construido con Next.js 14, presenta proyectos reales, experiencia profesional y testimonios de clientes, con soporte completo de **tres idiomas** (Español, English, Français).

---

## Características

- **Multi-idioma** — ES / EN / FR mediante un store global reactivo (sin next-intl ni middleware); selector de idioma con banderas en el header.
- **Tema oscuro** — Paleta oscura con acento naranja (`#f5741c`), tipografía Geist y animaciones suaves.
- **Partículas interactivas** — Hero animado con tsParticles (optimizado para móvil: 30 partículas vs 80 en escritorio).
- **Animaciones de página** — Transiciones entre rutas con Framer Motion.
- **Carrusel de servicios** — Swiper con paginación; muestra Desarrollo de Software, Marketing Digital y Diseño & Branding.
- **Portfolio de proyectos** — 5 proyectos reales (Mesón Delfín, Delfín Delivery, Ediciones Clío, ADD2Q, Galistore) con imágenes, descripción y enlace a demo.
- **Testimonios** — Carrusel de 4 testimonios de clientes reales, traducidos a los 3 idiomas.
- **Formulario de contacto** — Modal con validación cliente/servidor, protección XSS, rate limiting y envío vía Resend.
- **SEO completo** — Metadatos Open Graph, Twitter Card, sitemap dinámico y robots.txt.
- **Seguridad** — Headers HTTP estrictos (HSTS, X-Frame-Options, CSP, etc.).

---

## Stack

| Categoría         | Tecnología                                      |
|-------------------|-------------------------------------------------|
| Framework         | Next.js 14 (App Router, TypeScript)             |
| Estilos           | Tailwind CSS v3                                 |
| Animaciones       | Framer Motion, react-type-animation             |
| Partículas        | @tsparticles/react + @tsparticles/slim          |
| Carrusel          | Swiper 11                                       |
| Contadores        | react-countup                                   |
| Iconos            | Lucide React, React Icons                       |
| Email             | Resend                                          |
| Analytics         | Google Analytics (@next/third-parties)          |

---

## Estructura de rutas

```
/               → Home (hero + partículas + introducción)
/about          → Experiencia (contadores animados + timeline)
/services       → Servicios (slider Swiper)
/projects       → Proyectos (grid con imágenes)
/testimonials   → Testimonios (carrusel)
```

---

## Variables de entorno

Crea un archivo `.env.local` en la raíz con:

```env
RESEND_API_KEY=tu_clave_de_resend
```

---

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Despliegue

El proyecto se despliega automáticamente en **Vercel** al hacer push a `main`. Asegúrate de configurar la variable `RESEND_API_KEY` en el panel de Vercel.

---

## Proyectos incluidos

| Proyecto          | Tipo                                     | Demo                            |
|-------------------|------------------------------------------|---------------------------------|
| Mesón Delfín      | Web · Social Media · Paid Ads            | [mesondelfin.com](https://mesondelfin.com) |
| Delfín Delivery   | Web · Social Media · Paid Ads            | [delfindelivery.com](https://delfindelivery.com) |
| Ediciones Clío    | Web · Social · Paid Ads · Sysadmin       | [edicionesclio.com](https://edicionesclio.com) |
| ADD2Q             | Desarrollo de Software                   | —                               |
| Galistore         | Desarrollo de Software                   | —                               |

---

© Jorge Vidovic — [jorgevidovic.com](https://jorgevidovic.com)
