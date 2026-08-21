import { SimpleLayout } from '@/components/SimpleLayout'
import SEO from '@/components/SEO'

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Suscripción confirmada — Nicolás Vega"
        description="Confirmación de suscripción a las nuevas publicaciones de Nicolás Vega."
        url="https://nicovega.dev/thank-you"
        noIndex
      />
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
