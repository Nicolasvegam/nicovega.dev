export const SITE_URL = 'https://nicovega.dev'
export const SITE_NAME = 'Nicolás Vega'
export const CONTACT_EMAIL = 'hola@nicovega.dev'

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/nicolasvegam',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nicolasvegam/',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/nicovega.dev',
  },
] as const

export const pressLinks = [
  {
    publisher: 'Endeavor Chile',
    title: 'Perfil de Carvuk y sus emprendedores',
    href: 'https://endeavor.cl/company/carvuk/',
  },
  {
    publisher: 'Ingeniería UC',
    title: 'Nicolás Vega: «Una beca es sinónimo de que alguien confía en ti»',
    href: 'https://www.ing.uc.cl/noticias/nicolas-vega-una-beca-es-sinonimo-de-que-alguien-confia-en-ti/',
  },
  {
    publisher: 'Diario Financiero',
    title: 'A fondo con Carvuk, la startup ganadora del MAS Pitch 2023',
    href: 'https://www.df.cl/df-mas/punto-de-partida/a-fondo-con-carvuk-la-startup-ganadora-del-mas-pitch-2023',
  },
  {
    publisher: 'Techla Media',
    title: 'Carvuk es parte de la cuarta generación de Platanus Ventures',
    href: 'https://techla.pro/2022/09/12/carvuk-es-parte-de-la-cuarta-generacion-de-platanus-ventures/',
  },
] as const

export function absoluteUrl(pathOrUrl: string): string {
  return new URL(pathOrUrl, SITE_URL).toString()
}

export function canonicalUrl(pathOrUrl: string): string {
  const url = new URL(pathOrUrl, SITE_URL)
  url.hash = ''
  url.search = ''

  if (url.pathname !== '/') {
    url.pathname = url.pathname.replace(/\/+$/, '')
  }

  return url.toString()
}
