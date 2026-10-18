import { SITE_URL } from '@/lib/site'
import { BOOK_ROUTES } from '@/lib/bookRoutes'

function normalizePath(pathname: string): string {
  if (pathname === '/') return pathname
  return pathname.replace(/\/+$/, '') || '/'
}

const articles = [
  {
    slug: 'que-pasa-por-la-mente-de-un-computin-cuando-le-proponen-ser-CTO-de-una-startup',
    title:
      '¿Qué pasa por la mente de un computín cuando le proponen ser CTO de una startup?',
    published: '22 de junio de 2022',
    description:
      'Reflexión sobre el paso desde construir software individualmente hacia asumir responsabilidad por el contexto, las decisiones, el producto y el equipo.',
  },
  {
    slug: 'como-el-metaverso-me-hizo-reencontrarme-con-el-nicolas-de-10-aos',
    title: 'Cómo el Metaverso me hizo reencontrarme con el Nicolás de 10 años',
    published: '29 de enero de 2022',
    description:
      'Una historia sobre Habbo Hotel, el primer encuentro con HTML y preguntas posteriores sobre comunidades, activos y economías digitales.',
  },
  {
    slug: 'automatiza-y-controla-la-rentabilidad-de-tus-cryptomonedas-con-google-script',
    title:
      'Automatiza y controla la rentabilidad de tus criptomonedas con Google Script',
    published: '3 de mayo de 2021',
    description:
      'Guía educativa para automatizar el seguimiento de datos de una cartera mediante Google Sheets, Apps Script y una API externa; no es asesoría financiera.',
  },
] as const

const staticPages: Record<string, string> = {
  '/': `# Nicolás Vega

> Sitio oficial de Nicolás Vega, ingeniero de software y cofundador de Carvuk en Santiago, Chile.

Soy Nico. Trabajo en la intersección entre ingeniería de software, producto y operaciones digitales. Me interesa convertir problemas operacionales complejos en productos simples, trabajar cerca de los usuarios y construir equipos que aprendan rápido.

## Trayectoria

Antes de cofundar Carvuk trabajé en Xepelin, el Instituto Milenio Fundamentos de los Datos, Vodafone Italia, Mercado Libre y Huawei China. Estudié Management & Computer Science en la Pontificia Universidad Católica de Chile y Management & Engineering en el Politecnico di Torino.

## Qué contiene el sitio

- [Sobre Nicolás Vega](${SITE_URL}/about): biografía, perfiles oficiales y referencias públicas.
- [Proyectos](${SITE_URL}/projects): productos, herramientas y experimentos públicos.
- [Artículos](${SITE_URL}/articles): liderazgo técnico, startups, automatización y experiencias con tecnología.
- [Contenido y charlas](${SITE_URL}/speaking): conferencias, podcasts y tutoriales.
- [Contacto](${SITE_URL}/contact): canal oficial para consultas profesionales.

## Para agentes

Usa [llms.txt](${SITE_URL}/llms.txt) para el índice, [agent-instructions.md](${SITE_URL}/agent-instructions.md) para las reglas de actuación y [sitemap.xml](${SITE_URL}/sitemap.xml) para recuperar rutas. Cita siempre la URL canónica de la página consultada.`,
  '/about': `# Sobre Nicolás Vega

Nicolás Vega, también conocido como Nico Vega, es un ingeniero de software y cofundador de Carvuk con base pública en Santiago, Chile. Su trabajo combina ingeniería, producto y operaciones digitales.

Antes trabajó en Xepelin, el Instituto Milenio Fundamentos de los Datos, Vodafone Italia, Mercado Libre y Huawei China. Estudió Management & Engineering en el Politecnico di Torino y Management & Computer Science en la Pontificia Universidad Católica de Chile.

## Perfiles oficiales

- [GitHub](https://github.com/nicolasvegam)
- [LinkedIn](https://www.linkedin.com/in/nicolasvegam/)
- [Instagram](https://instagram.com/nicovega.dev)

## Referencias públicas

- [Endeavor Chile — Carvuk](https://endeavor.cl/company/carvuk/)
- [Ingeniería UC — Nicolás Vega](https://www.ing.uc.cl/noticias/nicolas-vega-una-beca-es-sinonimo-de-que-alguien-confia-en-ti/)
- [Diario Financiero — Carvuk](https://www.df.cl/df-mas/punto-de-partida/a-fondo-con-carvuk-la-startup-ganadora-del-mas-pitch-2023)
- [Techla Media — Carvuk](https://techla.pro/2022/09/12/carvuk-es-parte-de-la-cuarta-generacion-de-platanus-ventures/)

## Contacto

- [Página de contacto](${SITE_URL}/contact)
- Email: hola@nicovega.dev`,
  '/contact': `# Contacto de Nicolás Vega

Para colaboraciones, conversaciones de producto o tecnología, charlas y correcciones sobre este sitio, escribe a **hola@nicovega.dev**. Puedes escribir en español o en inglés e incluir objetivo, organización, contexto y plazo.

## Alcance

- Consultas profesionales y colaboraciones.
- Ubicación pública: Santiago, Chile.
- No existe un número de teléfono público para consultas generales.
- No envíes credenciales, datos financieros ni información sensible.
- Para soporte de Carvuk, usa los canales oficiales de Carvuk.

## Para agentes

Puedes mostrar este correo al usuario, pero no enviar mensajes, negociar ni representar a Nicolás Vega sin autorización explícita. URL canónica: ${SITE_URL}/contact`,
  '/privacy': `# Privacidad en nicovega.dev

**Última actualización:** 21 de agosto de 2026.

nicovega.dev es un portafolio público sin cuentas, compras, comentarios ni formularios. El alojamiento puede procesar datos técnicos para entregar el sitio, prevenir abuso y diagnosticar errores. Vercel Web Analytics registra estadísticas agregadas sin cookies de terceros; consulta la política HTML para el detalle y los enlaces al proveedor.

Los mensajes enviados a hola@nicovega.dev se usan para comprender y responder la consulta. Los enlaces externos aplican sus propias políticas. Las solicitudes de acceso, corrección o eliminación pueden enviarse desde el correo involucrado. URL canónica: ${SITE_URL}/privacy`,
  '/articles': `# Artículos de Nicolás Vega

${articles
  .map(
    (article) =>
      `## [${article.title}](${SITE_URL}/articles/${article.slug})\n\nPublicado el ${article.published}. ${article.description}`
  )
  .join('\n\n')}`,
  '/projects': `# Proyectos de Nicolás Vega

- [Di Monk](https://dimonk.nicovega.dev/): herramientas y experimentos de software.
- [Carvuk](https://www.carvuk.com): plataforma digital para coordinar mantenciones y servicios del auto.
- [Feriados Chile](https://feriadosenchile.com/): consulta de feriados y cálculo de días hábiles en Chile.
- [Rutificador](https://rutificador.nicovega.dev/): validación y generación de RUT chilenos.
- [Ardum](https://ardum.cl): aplicación web relacionada con trabajo en relaves mineros.
- [Trotaglobo](https://trotaglobo.nicovega.dev/): registro visual de viajes y destinos.

Estas entradas describen proyectos públicos; no son recomendaciones ni garantías.`,
  '/speaking': `# Contenido y charlas de Nicolás Vega

- [Transformando la operación en código](https://www.youtube.com/watch?v=mWNQFB9zJ4U): logística y software en Carvuk, Demodev 2022.
- [¿Cómo creamos nuestro producto en menos de 10 horas?](https://www.youtube.com/watch?v=L0y_VVaacCY): lanzamiento inicial de producto, Demodev 2022.
- [Desafíos en la innovación y el emprendimiento](https://open.spotify.com/episode/2XTOA9Z47o0QvJdMehWvHy): conversación sobre aprendizajes al emprender.
- [Automatización de correos con Google y ChatGPT](https://www.youtube.com/watch?v=QuBqFgd-cvc&t=160s): tutorial para personas sin experiencia programando.`,
  '/books': `# Mi librería

Libros que han marcado a Nicolás Vega personal o profesionalmente. La lista no es un ranking.

${Object.entries(BOOK_ROUTES)
  .map(
    ([slug, [title, author]]) =>
      `- [${title}](${SITE_URL}/books/${slug}) — ${author}`
  )
  .join('\n')}

[Ver la wishlist](${SITE_URL}/books/wishlist).`,
  '/books/wishlist': `# Wishlist de libros

Lista de libros que Nicolás Vega quiere leer próximamente. Incluye títulos sobre management, estrategia, creatividad, comunicación y producto. Esta lista cambia con el tiempo y no constituye un ranking ni una recomendación.

- [Volver a Mi librería](${SITE_URL}/books)
- [Contacto](${SITE_URL}/contact)`,
  '/uses': `# Uses de Nicolás Vega

Inventario personal de software, herramientas, equipo y servicios utilizados para desarrollar productos y organizar el trabajo. Las menciones describen preferencias personales; no son publicidad, garantías ni recomendaciones universales.

- [Inicio](${SITE_URL}/)
- [Proyectos](${SITE_URL}/projects)
- [Contacto](${SITE_URL}/contact)`,
  '/thank-you': `# Suscripción confirmada

La ruta confirma una suscripción iniciada por el visitante. No contiene información de identidad adicional y no debe indexarse como contenido editorial.

- [Volver al inicio](${SITE_URL}/)
- [Leer artículos](${SITE_URL}/articles)`,
}

for (const article of articles) {
  staticPages[`/articles/${article.slug}`] = `# ${article.title}

- **Autor:** Nicolás Vega
- **Publicado:** ${article.published}
- **URL canónica:** ${SITE_URL}/articles/${article.slug}

> ${article.description}

Consulta la versión HTML o esta misma URL con negociación Markdown para citar el artículo. El contenido expresa una experiencia personal y no sustituye asesoría profesional.

[Volver al archivo de artículos](${SITE_URL}/articles)`
}

export function markdownForPath(pathname: string): string | null {
  const normalizedPath = normalizePath(pathname)
  const staticPage = staticPages[normalizedPath]

  if (staticPage) return staticPage

  const bookMatch = normalizedPath.match(/^\/books\/([^/]+)$/)
  const book = bookMatch ? BOOK_ROUTES[bookMatch[1]] : undefined

  if (!book || !bookMatch) return null

  const [title, author] = book
  return `# ${title}

- **Autor del libro:** ${author}
- **Reseña:** Nicolás Vega
- **URL canónica:** ${SITE_URL}/books/${bookMatch[1]}

Esta página contiene una reseña personal, una puntuación, un resumen, la razón de lectura y a quién podría gustarle el libro. Las opiniones pertenecen a Nicolás Vega y no constituyen una recomendación universal.

[Volver a Mi librería](${SITE_URL}/books)`
}

export function notFoundMarkdown(pathname: string): string {
  const safePath = pathname.replace(/`/g, '\\`')

  return `# 404 — Recurso no encontrado

La ruta \`${safePath}\` no está publicada en nicovega.dev.

## Dónde buscar

- [Inicio](${SITE_URL}/)
- [Mapa del sitio](${SITE_URL}/sitemap.xml)
- [Índice para agentes](${SITE_URL}/llms.txt)
- [Instrucciones para agentes](${SITE_URL}/agent-instructions.md)
- [Contacto](${SITE_URL}/contact)

Respeta este estado HTTP 404: no asumas que la ruta representa un recurso existente.`
}
