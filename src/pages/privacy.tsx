import Link from 'next/link'

import { Prose } from '@/components/Prose'
import SEO from '@/components/SEO'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacidad — nicovega.dev"
        description="Política de privacidad de nicovega.dev: alojamiento, analítica, correo, enlaces externos, retención y solicitudes de las personas visitantes."
        url="https://nicovega.dev/privacy"
      />
      <SimpleLayout
        title="Privacidad."
        intro="Última actualización: 21 de agosto de 2026. Esta política explica qué información puede procesarse al visitar nicovega.dev o escribir a su correo de contacto."
      >
        <Prose className="max-w-2xl">
          <section aria-labelledby="privacy-scope">
            <h2 id="privacy-scope">Alcance y datos del sitio</h2>
            <p>
              nicovega.dev es un portafolio público y no ofrece cuentas,
              compras, comentarios ni formularios. La versión actual no instala
              cookies propias de publicidad. El proveedor de alojamiento y su
              red de entrega pueden procesar datos técnicos como dirección IP,
              agente de usuario, fecha, ruta solicitada y señales de seguridad
              para entregar el sitio, prevenir abuso y diagnosticar errores
              operacionales.
            </p>
          </section>

          <section aria-labelledby="privacy-analytics">
            <h2 id="privacy-analytics">Analítica</h2>
            <p>
              El sitio utiliza Vercel Web Analytics para conocer, de forma
              agregada, qué páginas reciben visitas. Según la documentación del
              proveedor, Web Analytics no usa cookies de terceros, trabaja con
              datos anónimos y no vincula la actividad a una persona
              identificable ni la sigue entre sitios. Puede registrar datos como
              ruta, fecha, referencia aproximada, país, tipo de dispositivo,
              sistema operativo y navegador. Consulta la{' '}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                documentación de privacidad de Vercel
              </a>{' '}
              para conocer el detalle vigente.
            </p>
          </section>

          <section aria-labelledby="privacy-email">
            <h2 id="privacy-email">Mensajes por correo</h2>
            <p>
              Si escribes a hola@nicovega.dev, el mensaje incluye los datos que
              decidas compartir y los metadatos normales del correo. Esa
              información se usa para entender y responder la consulta, mantener
              el contexto necesario y proteger la bandeja contra spam o fraude.
              No envíes contraseñas, números de tarjetas, secretos comerciales
              ni información personal de terceros que no estés autorizado a
              compartir.
            </p>
          </section>

          <section aria-labelledby="privacy-links">
            <h2 id="privacy-links">Enlaces y contenido externo</h2>
            <p>
              El sitio enlaza a GitHub, LinkedIn, Instagram, YouTube, Spotify,
              medios y proyectos independientes. Al seguir uno de esos enlaces,
              la política y las prácticas del servicio externo pasan a regir esa
              visita. nicovega.dev no controla sus cookies, mediciones, periodos
              de retención ni mecanismos de autenticación. Revisa sus avisos
              antes de compartir información.
            </p>
          </section>

          <section aria-labelledby="privacy-retention">
            <h2 id="privacy-retention">Retención y solicitudes</h2>
            <p>
              Los registros técnicos se conservan según la configuración y los
              periodos operacionales del proveedor de alojamiento. Los correos
              se guardan mientras resulten útiles para la conversación,
              obligaciones legítimas o seguridad. Puedes solicitar acceso,
              corrección o eliminación de la información que hayas enviado
              escribiendo desde el mismo correo a la dirección publicada en{' '}
              <Link href="/contact">Contacto</Link>. La solicitud se evaluará
              conforme a la normativa aplicable en Chile.
            </p>
          </section>

          <section aria-labelledby="privacy-changes">
            <h2 id="privacy-changes">Cambios</h2>
            <p>
              Si cambian las funciones del sitio o sus proveedores, esta página
              se actualizará y mostrará una nueva fecha. La URL canónica de esta
              política es https://nicovega.dev/privacy.
            </p>
          </section>
        </Prose>
      </SimpleLayout>
    </>
  )
}
