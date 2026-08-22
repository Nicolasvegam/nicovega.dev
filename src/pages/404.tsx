import type { MouseEvent } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import SEO from '@/components/SEO'
import { fireConfetti } from '@/lib/confetti'

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
  function handleEmojiClick(event: MouseEvent<HTMLButtonElement>) {
    fireConfetti(event.clientX, event.clientY)
  }

  return (
    <>
      <SEO
        title="404 — Recurso no encontrado"
        description="La ruta solicitada no está publicada en nicovega.dev. Usa el mapa del sitio o el índice para agentes para continuar."
        url="https://nicovega.dev/404"
        noIndex
      />
      <Container className="flex h-full items-center pt-16 sm:pt-32">
        <div className="flex w-full flex-col items-center text-center">
          <p className="animate-fade-up text-base font-semibold text-teal-500 dark:text-teal-400">
            404
          </p>
          <h1 className="animate-fade-up animation-delay-150 mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Esta página se fue a hacer algo distinto.
          </h1>
          <p className="animate-fade-up animation-delay-300 mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            Fiel al lema de la casa. Quizás está aprendiendo a hacer pan,
            corriendo una maratón o fundando otra startup. Mientras vuelve,
            acá tienes un par de caminos que sí existen.
          </p>
          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary">
              Volver al inicio
            </Button>
            <Button href="/articles" variant="secondary">
              Leer artículos
            </Button>
            <Button href="/sitemap.xml" variant="secondary">
              Ver sitemap
            </Button>
          </div>
          <button
            type="button"
            onClick={handleEmojiClick}
            aria-label="Lanzar confeti"
            title="Haz clic, te lo mereces"
            className="animate-fade-up animation-delay-300 mt-10 text-3xl transition hover:scale-110 active:scale-95"
          >
            🧭
          </button>
          <details className="mt-10 w-full max-w-3xl text-left">
            <summary className="cursor-pointer text-center text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400">
              Recursos de recuperación para agentes
            </summary>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-zinc-100 p-6 text-sm leading-6 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {recoveryMarkdown}
            </pre>
          </details>
        </div>
      </Container>
    </>
  )
}
