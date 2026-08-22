import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId = 0
    let ticking = false

    function updateProgress() {
      ticking = false
      const scrollTop = window.scrollY
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight

      if (scrollable <= 0) {
        setProgress(0)
        return
      }

      setProgress(Math.min(Math.max(scrollTop / scrollable, 0), 1))
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        rafId = window.requestAnimationFrame(updateProgress)
      }
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-teal-400 to-teal-500 dark:from-teal-500 dark:to-teal-400"
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}
