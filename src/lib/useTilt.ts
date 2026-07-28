import { useCallback, useRef } from 'react'
import type { MouseEvent } from 'react'

const MAX_TILT_DEG = 8

function clamp(value: number) {
  return Math.max(-MAX_TILT_DEG, Math.min(MAX_TILT_DEG, value))
}

function tiltEnabled() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Mouse-follow 3D tilt ("holographic card" effect).
 *
 * Attach `onMouseMove`/`onMouseLeave` to the element that receives pointer
 * events. The transform is applied to `targetRef.current` when attached, or
 * to the event's `currentTarget` otherwise, so the same handlers can be
 * shared across a list of elements. Disabled on touch-only devices and when
 * the user prefers reduced motion.
 */
export function useTilt<
  Target extends HTMLElement,
  Listener extends HTMLElement = Target,
>() {
  const targetRef = useRef<Target>(null)

  const onMouseMove = useCallback((event: MouseEvent<Listener>) => {
    if (!tiltEnabled()) return
    const el = targetRef.current ?? (event.currentTarget as HTMLElement)
    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return
    const relX = (event.clientX - rect.left) / rect.width - 0.5
    const relY = (event.clientY - rect.top) / rect.height - 0.5
    const rotateX = clamp(-relY * MAX_TILT_DEG * 2)
    const rotateY = clamp(relX * MAX_TILT_DEG * 2)
    el.style.transition = 'transform 0.1s ease-out'
    el.style.transform = `perspective(600px) rotateX(${rotateX.toFixed(
      2
    )}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.04)`
    el.style.willChange = 'transform'
  }, [])

  const onMouseLeave = useCallback((event: MouseEvent<Listener>) => {
    const el = targetRef.current ?? (event.currentTarget as HTMLElement)
    if (!el.style.transform) return
    el.style.transition = 'transform 0.35s ease'
    el.style.transform = ''
    el.style.willChange = ''
  }, [])

  return { targetRef, onMouseMove, onMouseLeave }
}
