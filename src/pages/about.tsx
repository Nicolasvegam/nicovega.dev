import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { SVGProps, ComponentType, ReactNode } from 'react'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import SEO from '@/components/SEO'
import { pressLinks } from '@/lib/site'

interface SocialLinkProps {
  className?: string
  href: string
  children: ReactNode
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <SEO
        title="Sobre Nicolás Vega"
        description="Trayectoria, experiencia y referencias públicas de Nicolás Vega, ingeniero de software y cofundador de Carvuk en Santiago de Chile."
        url="https://nicovega.dev/about"
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hola, soy Nico.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Soy Nicolás Vega, ingeniero de software y cofundador de{' '}
                <Link
                  href="https://www.carvuk.com"
                  className="text-teal-500 hover:text-teal-600"
                >
                  Carvuk
                </Link>
                . Trabajo construyendo productos digitales y sistemas que
                vuelven más simples tareas que antes dependían de coordinación
                manual. En Carvuk aplicamos esa idea al cuidado del auto:
                conectamos tecnología, operación y servicio para resolver
                mantenciones y reparaciones con menos fricción.
              </p>
              <p>
                Antes trabajé en producto, investigación de datos y tecnología
                en Xepelin, el Instituto Milenio Fundamentos de los Datos,
                Vodafone Italia, Mercado Libre y Huawei China. Estudié
                Management &amp; Engineering en el Politecnico di Torino y
                Management &amp; Computer Science en la Pontificia Universidad
                Católica de Chile.
              </p>
              <p>
                nicovega.dev es mi archivo profesional oficial. Reúne artículos
                sobre liderazgo técnico, automatización y startups, además de
                proyectos, charlas y libros que han influido en mi forma de
                trabajar. La información de este sitio se puede contrastar con
                los perfiles y referencias editoriales que aparecen abajo.
              </p>
              <section aria-labelledby="public-references">
                <h2
                  id="public-references"
                  className="text-xl font-semibold text-zinc-800 dark:text-zinc-100"
                >
                  Referencias públicas
                </h2>
                <p>
                  Estas fuentes externas vinculan a Nicolás Vega con Carvuk, su
                  formación y su trabajo en tecnología, y ayudan a desambiguar
                  este perfil de otras personas con el mismo nombre.
                </p>
                <ul className="space-y-3">
                  {pressLinks.map((reference) => (
                    <li key={reference.href}>
                      <Link
                        href={reference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400"
                      >
                        {reference.title}
                      </Link>{' '}
                      <span>— {reference.publisher}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/nicolasvegam"
                icon={GitHubIcon}
                className="mt-4"
              >
                Sígueme en GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/nicolasvegam/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Sígueme LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hola@nicovega.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hola@nicovega.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
