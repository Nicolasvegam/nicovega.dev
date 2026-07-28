let hasGreeted = false

const ASCII_ART = `
  _   _ _
 | \\ | (_) ___ ___
 |  \\| | |/ __/ _ \\
 | |\\  | | (_| (_) |
 |_| \\_|_|\\___\\___/
`

export function printConsoleGreeting() {
  if (typeof window === 'undefined') return
  if (hasGreeted) return
  hasGreeted = true

  console.log(
    `%c${ASCII_ART}`,
    'color: #14b8a6; font-family: monospace; font-weight: bold;'
  )
  console.log(
    '%c¡Hola dev! 👀 ¿Curioseando la consola? Me gusta tu estilo.',
    'color: #14b8a6; font-size: 14px; font-weight: bold;'
  )
  console.log(
    '%cHablemos → https://www.linkedin.com/in/nicolasvegam/',
    'color: #71717a; font-size: 12px;'
  )
}
