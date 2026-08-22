import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const DEFAULT_TITLE = 'Nicolás Vega — Software Engineer & Tech Lead'
const MAX_TITLE_LENGTH = 120

function truncateTitle(title: string) {
  if (title.length <= MAX_TITLE_LENGTH) {
    return title
  }
  return `${title.slice(0, MAX_TITLE_LENGTH).trimEnd()}…`
}

export default function handler(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const rawTitle = searchParams.get('title')?.trim()
    const title = truncateTitle(rawTitle || DEFAULT_TITLE)

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#18181b',
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '120px',
              height: '8px',
              borderRadius: '9999px',
              backgroundColor: '#2dd4bf',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 70 ? '52px' : '64px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#f4f4f5',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '28px',
              color: '#a1a1aa',
            }}
          >
            <span style={{ color: '#2dd4bf', fontWeight: 700 }}>
              nicovega.dev
            </span>
            <span style={{ margin: '0 16px', color: '#3f3f46' }}>—</span>
            <span>Nicolás Vega</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch {
    return new Response('Error al generar la imagen', { status: 500 })
  }
}
