import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <div>
          <p>© {new Date().getFullYear()} mrcapy03. all rights reserved.</p>
        </div>
        <div>
          <Link 
            href="https://github.com/devmrcapy03/website."
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
          >
            source code.
          </Link>
        </div>
      </div>
    </footer>
  )
}