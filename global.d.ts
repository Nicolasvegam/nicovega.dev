import type { ComponentType, CSSProperties } from 'react'
import type { ArticleMeta } from '@/types/articles'

declare module '*.mdx' {
  interface MDXProps {
    isRssFeed?: boolean
    [key: string]: unknown
  }

  const MDXComponent: ComponentType<MDXProps>
  export const meta: ArticleMeta
  export default MDXComponent
}

// Fix for Headless UI v1.x compatibility with React 18 types
declare module '@headlessui/react' {
  import type { ComponentType, ReactNode, ElementType, HTMLAttributes, RefAttributes, ReactElement } from 'react'

  interface TransitionChildProps {
    as?: ElementType
    enter?: string
    enterFrom?: string
    enterTo?: string
    leave?: string
    leaveFrom?: string
    leaveTo?: string
    children?: ReactNode
  }

  interface TransitionRootProps extends TransitionChildProps {
    show?: boolean
    appear?: boolean
  }

  interface DialogProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean
    onClose: (value: boolean) => void
    initialFocus?: React.RefObject<HTMLElement>
    as?: ElementType
    static?: boolean
    unmount?: boolean
  }

  interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
  }

  interface PopoverButtonProps extends HTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    href?: string
  }

  interface PopoverPanelProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    focus?: boolean
    static?: boolean
    unmount?: boolean
  }

  interface PopoverOverlayProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
  }

  interface DialogPanelProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
  }

  interface DialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    as?: ElementType
  }

  export const Transition: ComponentType<TransitionRootProps> & {
    Root: ComponentType<TransitionRootProps>
    Child: ComponentType<TransitionChildProps>
  }

  export const Dialog: ComponentType<DialogProps> & {
    Panel: ComponentType<DialogPanelProps>
    Title: ComponentType<DialogTitleProps>
    Overlay: ComponentType<HTMLAttributes<HTMLDivElement>>
    Description: ComponentType<HTMLAttributes<HTMLParagraphElement>>
  }

  export const Popover: ComponentType<PopoverProps> & {
    Button: ComponentType<PopoverButtonProps>
    Panel: ComponentType<PopoverPanelProps>
    Overlay: ComponentType<PopoverOverlayProps>
    Group: ComponentType<HTMLAttributes<HTMLDivElement>>
  }
}

// Extended CSSProperties to support CSS variables
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
} 