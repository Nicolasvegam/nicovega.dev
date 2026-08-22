const COLORS = [
  '#14b8a6', // teal-500
  '#0ea5e9', // sky-500
  '#f59e0b', // amber-500
  '#f43f5e', // rose-500
  '#8b5cf6', // violet-500
  '#22c55e', // green-500
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  rotation: number
  rotationSpeed: number
  opacity: number
}

let activeCanvas: HTMLCanvasElement | null = null

export function fireConfetti(originX?: number, originY?: number) {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (activeCanvas) return

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  canvas.style.cssText =
    'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999;'
  ctx.scale(dpr, dpr)
  document.body.appendChild(canvas)
  activeCanvas = canvas

  const x = originX ?? window.innerWidth / 2
  const y = originY ?? window.innerHeight / 3

  const particles: Particle[] = Array.from({ length: 120 }, () => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9
    const speed = 6 + Math.random() * 9
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 5 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      opacity: 1,
    }
  })

  const start = performance.now()
  const duration = 2500

  function frame(now: number) {
    if (!ctx) return
    const elapsed = now - start
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    let alive = false
    for (const p of particles) {
      p.vy += 0.25
      p.vx *= 0.99
      p.x += p.vx
      p.y += p.vy
      p.rotation += p.rotationSpeed
      p.opacity = Math.max(0, 1 - elapsed / duration)

      if (p.opacity > 0 && p.y < window.innerHeight + 20) {
        alive = true
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        ctx.restore()
      }
    }

    if (alive && elapsed < duration) {
      requestAnimationFrame(frame)
    } else {
      canvas.remove()
      activeCanvas = null
    }
  }

  requestAnimationFrame(frame)
}
