import Link from 'next/link'

import { Container } from '@/components/Container'
import SEO from '@/components/SEO'

const recoveryMarkdown = `# 404 — Recurso no encontrado

La ruta solicitada no está publicada en nicovega.dev.

## Dónde buscar

- [Inicio](https://nicovega.dev/)
- [Mapa del sitio](https://nicovega.dev/sitemap.xml)
- [Índice para agentes](https://nicovega.dev/llms.txt)
- [Instrucciones para agentes](https://nicovega.dev/agent-instructions.md)
- [Contacto](https://nicovega.dev/contact)

Respeta este estado HTTP 404: no asumas que la ruta representa un recurso existente.`

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Recurso no encontrado"
        description="La ruta solicitada no está publicada en nicovega.dev. Usa el mapa del sitio o el índice para agentes para continuar."
        url="https://nicovega.dev/404"
        noIndex
      />
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-teal-500">Error 404</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Esta ruta no existe.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            El servidor devolvió un estado HTTP 404 real. Puedes volver al
            inicio o usar alguno de estos recursos para encontrar la página
            correcta.
          </p>
          <nav
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"
            aria-label="Recuperación de error"
          >
            <Link href="/" className="text-teal-500 hover:text-teal-600">
              Inicio
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-teal-500 hover:text-teal-600"
            >
              Sitemap
            </Link>
            <Link
              href="/llms.txt"
              className="text-teal-500 hover:text-teal-600"
            >
              llms.txt
            </Link>
            <Link href="/contact" className="text-teal-500 hover:text-teal-600">
              Contacto
            </Link>
          </nav>
          <pre className="mt-10 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-zinc-100 p-6 text-sm leading-6 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {recoveryMarkdown}
          </pre>
        </div>
      </Container>
    </>
  )
}
