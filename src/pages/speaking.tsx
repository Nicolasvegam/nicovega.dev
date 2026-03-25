import Head from 'next/head'
import type { ReactNode } from 'react'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

interface SpeakingSectionProps {
  title: string
  children: ReactNode
}

function SpeakingSection({ children, ...props }: SpeakingSectionProps) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

interface AppearanceProps {
  title: string
  description: string
  event: string
  cta: string
  href: string
}

function Appearance({ title, description, event, cta, href }: AppearanceProps) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Nicolás Vega</title>
        <meta
          name="description"
          content="Algo de contenido anda por ahí."
        />
      </Head>
      <SimpleLayout
        title="A veces hago Contenido"
        intro="Creo que no soy muy bueno, pero se puede mejorar."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferencias">
            <Appearance
              href="https://www.youtube.com/watch?v=mWNQFB9zJ4U"
              title="Transformando la operación en código"
              description="La logística detrás de nuestro negocio es lo más importante. ¿Cómo lo solucionamos en Carvuk?"
              event="Demodev - Octubre 2022"
              cta="Ver video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=L0y_VVaacCY"
              title="¿Cómo creamos nuestro producto en menos de 10 horas?"
              description="Nicolás Vega, CTO de Carvuk comparte su experiencia en detalle sobre cómo lanzaron el producto al mercado en menos de 10 horas."
              event="Demodev - Abril 2022"
              cta="Ver video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://open.spotify.com/episode/2XTOA9Z47o0QvJdMehWvHy?si=d-41CDJxR_2ioLlAdpXkRg"
              title="Desafíos en la Innovación y el Emprendimiento | Carlos Hinojosa y Nicolás Vega"
              description="Hablamos con Carlos Hinojosa (CEO @ B-Cycle) y Nicolás Vega (CTO @ Carvuk) sobre sus experiencias emprendiendo como exalumnos de Ingeniería UC, las dificultades de emprender y los aprendizajes que han hecho enfrentándolas."
              event="La segunda derivada"
              cta="Escuchar podcast"
            />
          </SpeakingSection>
          <SpeakingSection title="Youtube">
            <Appearance
              href="https://www.youtube.com/watch?v=QuBqFgd-cvc&t=160s"
              title="Automatización de correos con Google y ChatGPT"
              description="Te enseño cómo automatizar correos con Google y ChatGPT sin saber programar."
              event="Nicolás Vega"
              cta="Ver video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
