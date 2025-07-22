import Link from 'next/link'

function ChevronRight(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  )
}

export default function Breadcrumb({ items }) {
  const truncateText = (text, maxLength = 15) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <nav className="flex overflow-hidden" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 sm:space-x-2 min-w-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li key={item.name} className="flex items-center min-w-0">
              {index > 0 && (
                <ChevronRight className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gray-400" />
              )}
              {isLast ? (
                <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400" aria-current="page">
                  <span className="sm:hidden max-w-[100px] truncate block">{truncateText(item.name)}</span>
                  <span className="hidden sm:inline">{item.name}</span>
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <span className="sm:hidden max-w-[80px] truncate block">{truncateText(item.name)}</span>
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}