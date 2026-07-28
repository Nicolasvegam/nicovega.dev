import Head from 'next/head'
import type { MouseEvent } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { fireConfetti } from '@/lib/confetti'

export default function NotFound() {
  function handleEmojiClick(event: MouseEvent<HTMLButtonElement>) {
    fireConfetti(event.clientX, event.clientY)
  }

  return (
    <>
      <Head>
        <title>Página no encontrada - Nicolás Vega</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container className="flex h-full items-center pt-16 sm:pt-32">
        <div className="flex flex-col items-center text-center">
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
        </div>
      </Container>
    </>
  )
}
