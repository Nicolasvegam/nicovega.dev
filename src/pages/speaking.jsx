import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
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
        <title>Speaking - Nicol谩s Vega</title>
        <meta
          name="description"
          content="Me ha tocado ser speaker en algunos eventos."
        />
      </Head>
      <SimpleLayout 
        title="A veces soy Speaker 馃帳"
        intro="No soy muy bueno, pero me siguen invitando por alguna raz贸n"
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferencias">
            <Appearance
              href="https://www.youtube.com/watch?v=mWNQFB9zJ4U"
              title="Transformando la operaci贸n en c贸digo"
              description="La log铆stica detr谩s de nuestro negocio es lo m谩s importante. 驴C贸mo lo solucionamos en Carvuk?"
              event="Demodev - Octubre 2022"
              cta="Ver video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=L0y_VVaacCY"
              title="驴C贸mo creamos nuestro producto en menos de 10 horas?"
              description="Nicol谩s Vega, CTO de Carvuk comparte su experiencia en detalle sobre c贸mo lanzaron el producto al mercado en menos de 10 horas."
              event="Demodev - Abril 2022"
              cta="Ver video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://open.spotify.com/episode/2XTOA9Z47o0QvJdMehWvHy?si=d-41CDJxR_2ioLlAdpXkRg"
              title="Desaf铆os en la Innovaci贸n y el Emprendimiento | Carlos Hinojosa y Nicol谩s Vega"
              description="Hablamos con Carlos Hinojosa (CEO @ B-Cycle) y Nicol谩s Vega (CTO @ Carvuk) sobre sus experiencias emprendiendo como exalumnos de Ingenier铆a UC, las dificultades de emprender y los aprendizajes que han hecho enfrent谩ndolas."
              event="La segunda derivada"
              cta="Escuchar podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
