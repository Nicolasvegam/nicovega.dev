import clsx from 'clsx'

interface ReadingNowBadgeProps {
  className?: string
}

export function ReadingNowBadge({ className }: ReadingNowBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-2.5 py-1 text-xs font-medium text-white shadow-lg dark:bg-teal-400 dark:text-zinc-900',
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 motion-reduce:hidden dark:bg-zinc-900" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white dark:bg-zinc-900" />
      </span>
      Leyendo ahora
    </span>
  )
}
