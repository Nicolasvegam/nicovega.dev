import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { GetStaticProps } from 'next'
import type { SVGProps, ComponentType } from 'react'
import type { StaticImageData } from 'next/image'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import MiLibreria from '@/components/MiLibreria'
import Photos from '@/components/Photos'
import logoXepelin from '@/images/logos/xepelin-logo.png'
import logoCarvuk from '@/images/logos/carvuk-logo.png'
import logoMeli from '@/images/logos/meli-logo.png'
import logoVodafone from '@/images/logos/vodafone-logo.png'
import logoHuawei from '@/images/logos/huawei-logo.png'
import logoLookOut from '@/images/logos/lookout-logo.png'
import logoIMFD from '@/images/logos/imfd-logo.png'
import logoVandv from '@/images/logos/vandv-logo.png'
import logoUC from '@/images/logos/uc-logo.png'
import logoPoli from '@/images/logos/poli-logo.png'
import logoDrexel from '@/images/logos/drexel-uni-logo.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import SEO from '@/components/SEO'

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface ArticlePreview {
  slug: string
  title: string
  date: string
  description: string
}

interface ArticleProps {
  article: ArticlePreview
}

function Article({ article }: ArticleProps) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Leer artículo</Card.Cta>
    </Card>
  )
}

interface SocialLinkProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  href: string
  'aria-label'?: string
}

function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link
      className="group -m-1 p-1 transition-all duration-200 ease-in-out hover:scale-110"
      {...props}
      target="_blank"
      rel="me noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface DateRange {
  label?: string
  dateTime?: number | string
}

interface Role {
  company: string
  title: string
  logo: StaticImageData
  location: string
  flag: string
  link: string
  start: string | DateRange
  end: string | DateRange
}

function Resume() {
  const resume: (Role | undefined)[] = [
    {
      company: 'Carvuk',
      title: 'Co-Founder',
      logo: logoCarvuk,
      location: 'Santiago, Chile',
      flag: '🇨🇱',
      link: 'https://carvuk.com',
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Xepelin',
      title: 'Product Engineer',
      logo: logoXepelin,
      location: 'CDMX, México',
      flag: '🇲🇽',
      link: 'https://xepelin.com',
      start: '2020',
      end: '2022',
    },
    {
      company: 'IMFD',
      title: 'Data Researcher',
      logo: logoIMFD,
      location: 'Santiago, Chile',
      flag: '🇨🇱',
      link: 'https://imfd.cl',
      start: '2020',
      end: '2022',
    },
    {
      company: 'Vodafone Italia',
      title: 'Mobility Trainee',
      logo: logoVodafone,
      location: 'Turín, Italia',
      flag: '🇮🇹',
      link: 'https://vodafone.it',
      start: '2019',
      end: '2020',
    },
    {
      company: 'Mercado Libre',
      title: 'Software Intern',
      logo: logoMeli,
      location: 'Santiago, Chile',
      flag: '🇨🇱',
      link: 'https://mercadolibre.cl',
      start: '2019',
      end: '2019',
    },
    {
      company: 'Huawei China',
      title: 'Tech Trainee',
      logo: logoHuawei,
      location: 'Shenzhen, China',
      flag: '🇨🇳',
      link: 'https://huawei.com',
      start: '2019',
      end: '2019',
    },
    {
      company: 'LookOut',
      title: 'Co-Founder',
      logo: logoLookOut,
      location: 'Santiago, Chile',
      flag: '🇨🇱',
      link: '#',
      start: '2017',
      end: '2019',
    },
    {
      company: 'V&V Store',
      title: 'Co-Founder',
      logo: logoVandv,
      location: 'Santiago, Chile',
      flag: '🇨🇱',
      link: '#',
      start: '2016',
      end: '2018',
    },
  ]

  const filteredResume = resume.filter(
    (role): role is Role => role !== undefined
  )

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experiencia</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {filteredResume.map((role, roleIndex) => {
          const startLabel =
            typeof role.start === 'string' ? role.start : role.start.label ?? ''
          const startDateTime =
            typeof role.start === 'string'
              ? role.start
              : String(role.start.dateTime ?? role.start.label ?? '')
          const endLabel =
            typeof role.end === 'string' ? role.end : role.end.label ?? ''
          const endDateTime =
            typeof role.end === 'string'
              ? role.end
              : String(role.end.dateTime ?? role.end.label ?? '')

          return (
            <li key={roleIndex} className="flex gap-4">
              <Link
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-all duration-200 ease-in-out hover:scale-110 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
              >
                <Image
                  src={role.logo}
                  alt=""
                  className="h-7 w-7"
                  height={18}
                  width={18}
                  unoptimized={true}
                />
              </Link>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Compañía</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-200 ease-in-out hover:scale-105 hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      {role.company}
                    </Link>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {role.flag} {role.location}
                    </span>
                  </div>
                </dd>
                <dt className="sr-only">Rol</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${startLabel} until ${endLabel}`}
                >
                  <time dateTime={startDateTime}>{startLabel}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={endDateTime}>{endLabel}</time>
                </dd>
              </dl>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function Education() {
  const resume: Role[] = [
    {
      company: 'Politecnico di Torino',
      title: 'MSc. Mangement & Engineering',
      logo: logoPoli,
      location: 'Turín, Italia',
      flag: '🇮🇹',
      link: 'https://www.polito.it/',
      start: '2019',
      end: '2021',
    },
    {
      company: 'Drexel University',
      title: 'English Language Certification',
      logo: logoDrexel,
      location: 'Philadelphia, USA',
      flag: '🇺🇸',
      link: 'https://drexel.edu',
      start: '2019',
      end: '2019',
    },
    {
      company: 'PUC',
      title: 'BSc. Management & Computer Science',
      logo: logoUC,
      location: 'Santiago, Chile',
      flag: '🇨🇱',
      link: 'https://uc.cl',
      start: '2015',
      end: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Educación</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => {
          const startLabel =
            typeof role.start === 'string' ? role.start : role.start.label ?? ''
          const startDateTime =
            typeof role.start === 'string'
              ? role.start
              : String(role.start.dateTime ?? role.start.label ?? '')
          const endLabel =
            typeof role.end === 'string' ? role.end : role.end.label ?? ''
          const endDateTime =
            typeof role.end === 'string'
              ? role.end
              : String(role.end.dateTime ?? role.end.label ?? '')

          return (
            <li key={roleIndex} className="flex gap-4">
              <Link
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-all duration-200 ease-in-out hover:scale-110 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
              >
                <Image
                  src={role.logo}
                  alt=""
                  className="h-7 w-7 rounded-full object-cover"
                />
              </Link>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Lugar</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-200 ease-in-out hover:scale-105 hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      {role.company}
                    </Link>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {role.flag} {role.location}
                    </span>
                  </div>
                </dd>
                <dt className="sr-only">Title</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${startLabel} until ${endLabel}`}
                >
                  <time dateTime={startDateTime}>{startLabel}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={endDateTime}>{endLabel}</time>
                </dd>
              </dl>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

interface HomeProps {
  articles: ArticlePreview[]
}

export default function Home({ articles }: HomeProps) {
  return (
    <>
      <SEO
        title="Nicolás Vega — Software Engineer y Cofundador"
        description="Sitio oficial de Nicolás Vega, ingeniero de software y cofundador de Carvuk en Santiago, Chile. Artículos, proyectos, experiencia y contenido técnico."
        url="https://nicovega.dev"
        tags={[
          'software engineer',
          'tech lead',
          'startup founder',
          'carvuk',
          'xepelin',
          'mercadolibre',
          'vodafone',
          'huawei',
          'chile',
          'technology',
        ]}
      />
      <Container className="mt-9">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Nicolás Vega
          </h1>
          <p
            className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
            role="doc-subtitle"
          >
            Hola, soy Nico: ingeniero de software y cofundador de Carvuk. Me
            gusta convertir problemas operacionales complejos en productos
            digitales simples, trabajar cerca de los usuarios y construir
            equipos que aprendan rápido. Este es mi sitio profesional oficial.
          </p>
          <nav className="mt-6 flex gap-6" aria-label="Social media links">
            <SocialLink
              href="https://github.com/nicolasvegam"
              aria-label="Sígueme on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://instagram.com/nicovega.dev"
              aria-label="Sígueme on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/nicolasvegam/"
              aria-label="Sígueme on LinkedIn"
              icon={LinkedInIcon}
            />
          </nav>
        </header>
      </Container>
      <Photos />
      <Container className="mt-24 sm:mt-28">
        <section
          className="max-w-3xl"
          aria-labelledby="engineering-product-operations"
        >
          <h2
            id="engineering-product-operations"
            className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"
          >
            Ingeniería, producto y operación
          </h2>
          <div className="mt-6 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Soy Nicolás Vega, también conocido como Nico Vega. Trabajo en la
              intersección entre software, producto y operaciones digitales. En
              Carvuk cofundé una plataforma que coordina mantenciones,
              reparaciones y otros servicios para automóviles. El desafío no es
              solo escribir código: también implica entender el problema del
              usuario, diseñar procesos confiables y convertir lo aprendido en
              herramientas que un equipo pueda operar y mejorar.
            </p>
            <p>
              Antes de emprender trabajé en desarrollo de producto,
              investigación de datos y tecnología en Xepelin, el Instituto
              Milenio Fundamentos de los Datos, Vodafone Italia, Mercado Libre y
              Huawei China. Esas experiencias me permitieron observar empresas
              en etapas y culturas muy distintas: desde probar un producto junto
              a sus primeros usuarios hasta colaborar en organizaciones
              internacionales. Mi formación combina Management &amp; Computer
              Science en la Pontificia Universidad Católica de Chile y
              Management &amp; Engineering en el Politecnico di Torino.
            </p>
            <p>
              En este sitio documento ideas que me han servido al construir
              productos: liderazgo técnico, decisiones con información
              incompleta, automatización, startups y aprendizaje práctico.
              También mantengo un registro de proyectos, charlas, entrevistas y
              libros. No intento presentar una receta universal; son
              experiencias situadas que pueden ayudar a formular mejores
              preguntas, comparar enfoques o encontrar una referencia concreta
              para seguir investigando.
            </p>
            <p>
              nicovega.dev es el dominio canónico de este perfil. La página{' '}
              <Link
                href="/about"
                className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400"
              >
                About
              </Link>{' '}
              amplía la biografía y enlaza fuentes públicas que permiten
              distinguirme de otras personas con el mismo nombre. Para consultas
              profesionales, colaboraciones, charlas o correcciones, la página
              de{' '}
              <Link
                href="/contact"
                className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400"
              >
                contacto
              </Link>{' '}
              publica el canal oficial y explica su alcance.
            </p>
            <p>
              Los agentes y buscadores pueden solicitar las páginas HTML
              publicadas con
              <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                Accept: text/markdown
              </code>
              para obtener una representación compacta. El archivo{' '}
              <Link
                href="/llms.txt"
                className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400"
              >
                llms.txt
              </Link>{' '}
              indica cuándo usar este sitio, cómo citarlo y dónde recuperarse de
              una ruta inexistente. Los artículos educativos no sustituyen
              asesoría financiera, legal ni profesional individual.
            </p>
          </div>
        </section>
      </Container>
      <Container className="mt-24 md:mt-28">
        <main className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <section
            className="flex flex-col gap-16"
            aria-labelledby="recent-articles"
          >
            <h2 id="recent-articles" className="sr-only">
              Recent Articles
            </h2>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </section>
          <aside
            className="space-y-10 lg:pl-16 xl:pl-24"
            aria-label="Professional information"
          >
            <Resume />
            <Education />
          </aside>
        </main>
      </Container>
      <Container className="mt-16 sm:mt-20">
        <MiLibreria />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  const articles = await getAllArticles()

  return {
    props: {
      articles: articles.slice(0, 4).map(({ component, ...meta }) => meta),
    },
  }
}
