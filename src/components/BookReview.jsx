import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function BookReview({ book, isOpen, onClose }) {
  if (!book || !book.review) return null

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-zinc-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white dark:bg-zinc-900 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                    onClick={onClose}
                  >
                    <span className="sr-only">Cerrar</span>
                    <CloseIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 dark:text-zinc-100">
                      Reseña de libro
                    </Dialog.Title>
                    
                    <div className="mt-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <Image
                            src={book.image}
                            alt={book.title}
                            className="h-48 w-32 rounded-lg object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{book.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-zinc-400 mb-2">{book.author}</p>
                          <StarRating rating={book.rating} />
                          
                          <div className="mt-4 space-y-4">
                            <div className="prose prose-sm dark:prose-invert max-w-none">
                              <p className="text-gray-700 dark:text-zinc-300">{book.review.summary}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                              <div>
                                <h5 className="font-semibold text-gray-900 dark:text-zinc-100">¿Me gustó?</h5>
                                <p className="text-gray-700 dark:text-zinc-300">{book.review.liked}</p>
                              </div>
                              
                              <div>
                                <h5 className="font-semibold text-gray-900 dark:text-zinc-100">¿De qué se trata?</h5>
                                <p className="text-gray-700 dark:text-zinc-300">{book.review.about}</p>
                              </div>
                              
                              <div>
                                <h5 className="font-semibold text-gray-900 dark:text-zinc-100">¿Por qué lo compré?</h5>
                                <p className="text-gray-700 dark:text-zinc-300">{book.review.whyBought}</p>
                              </div>
                              
                              <div>
                                <h5 className="font-semibold text-gray-900 dark:text-zinc-100">Parte favorita</h5>
                                <p className="text-gray-700 dark:text-zinc-300">{book.review.favoritePart}</p>
                              </div>
                              
                              <div>
                                <h5 className="font-semibold text-gray-900 dark:text-zinc-100">Le puede gustar a</h5>
                                <p className="text-gray-700 dark:text-zinc-300">{book.review.goodFor}</p>
                              </div>
                              
                              <div>
                                <h5 className="font-semibold text-gray-900 dark:text-zinc-100">Le puede disgustar a</h5>
                                <p className="text-gray-700 dark:text-zinc-300">{book.review.notGoodFor}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-zinc-900 dark:bg-zinc-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-600 sm:ml-3 sm:w-auto"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}