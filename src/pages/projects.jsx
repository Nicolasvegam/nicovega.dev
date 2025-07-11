import Image from 'next/image'

import {Card} from '../components/Card'
import { SimpleLayout } from '../components/SimpleLayout'
import SEO from '@/components/SEO';

import logoCarvuk from '@/images/logos/carvuk-logo.png'
import logoEod from '@/images/logos/eod-logo.png'
import logoArdum from '@/images/logos/ardum-logo.png'
import logoRutificador from '@/images/logos/rutificador.svg'
import logoFeriados from '@/images/logos/feriados.webp'
import logoTrotaglobo from '@/images/logos/trotamundo.png'
import logoDiMonk from '@/images/logos/di-monk-logo.png'



const projects = [
  {
    name: 'Di Monk',
    description: 'Un lugar para concentrar todo el desarrollo de herramientas y experimentos.',
    link: { href: 'https://www.dimonk.com/', label: 'Di Monk' },
    logo: logoDiMonk,
  },
  {
    name: 'Carvuk',
    description:
      'El asistente personal para tu auto. Relájate, nos encargamos de todo!',
    link: { href: 'https://www.carvuk.com', label: 'Carvuk' },
    logo: logoCarvuk,
  },
  {
    name: 'Feriados Chile',
    description:
      'App para ver los días feriados en Chile y calcular días hábiles.',
    link: { href: 'https://feriadosenchile.com/', label: 'Feriados en Chile' },
    logo: logoFeriados,
  },
  {
    name: 'Rutificador',
    description:
      'App para verificar la validez y generar RUTs chilenos.',
    link: { href: 'https://www.rutschile.com/', label: 'Rutificar' },
    logo: logoRutificador,
  },
  {
    name: 'Ardum Page',
    description:
      'Webapp para un cliente que trabaja en los relaves mineros.',
    link: { href: 'https://ardum.cl', label: 'ardum.cl' },
    logo: logoArdum,
  },
  {
    name: 'EOD Puerto Varas',
    description:
      'Landing web para una institución gobernamental.',
    link: { href: 'https://eod-puertovaras-git-main-nicolasvegams-projects.vercel.app/', label: 'eodpuertovaras.cl' },
    logo: logoEod,
  },
  {
    name: 'Trotaglobo',
    description:
      'Acá llevo el trackeo de mis viajes y futuros destinos.',
    link: { href: 'https://trotaglobo.vercel.app/users/user_2x6yUDYSGkHWPYAH88eEC08knh1', label: 'trotaglobo' },
    logo: logoTrotaglobo,
  },
]


const LinkIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Projects = () => {
  return (
    <>
      <SEO 
        title="Proyectos - Nicolás Vega"
        description="Cosas que he hecho."
        url="https://nicovega.dev/projects"
      />
      <SimpleLayout
        title="Proyectos ✨"
        intro="Cosas que he hecho alguna vez"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name} className="group">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export default Projects
