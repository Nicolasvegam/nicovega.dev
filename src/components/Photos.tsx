import Image from 'next/image'
import clsx from 'clsx'
import type { StaticImageData } from 'next/image'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

interface PhotosProps {
  images?: StaticImageData[]
}

export default function Photos({ images = [image1, image2, image3, image4, image5] }: PhotosProps) {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="scrollbar-hidden -my-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc(50vw-5.5rem)] py-4 sm:snap-none sm:justify-center sm:gap-8 sm:overflow-hidden sm:px-0">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'animate-fade-up relative aspect-[9/10] w-44 flex-none snap-center overflow-hidden rounded-xl bg-zinc-100 transition-all duration-300 ease-out hover:rotate-0 hover:scale-105 hover:shadow-xl hover:shadow-zinc-800/20 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
            style={{ animationDelay: `${150 + imageIndex * 100}ms` }}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
