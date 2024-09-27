const fs = require('fs').promises;
const path = require('path');
const xml = require('xml');

const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL;

const staticRoutes = [
  '',
  'about',
  'projects',
  'services',
  'testimonials',
];

// Función para obtener rutas estáticas
const generateStaticRoutes = () => {
  return staticRoutes.map((route) => ({
    url: [
      { loc: `${DOMAIN}/${route}` },
      { lastmod: new Date().toISOString() },
      { changefreq: 'monthly' },
      { priority: 0.8 },
    ],
  }));
};

const generateSitemap = async () => {
  const staticRoutesXML = generateStaticRoutes();

  const sitemap = xml(
    { urlset: [{ _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } }, ...staticRoutesXML] },
    { declaration: true }
  );

  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  await fs.writeFile(outputPath, sitemap, 'utf8');

  console.log(`Sitemap generado exitosamente en ${outputPath}`);
};

generateSitemap().catch((error) => {
  console.error('Error al generar el sitemap:', error);
});
