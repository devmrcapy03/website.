import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const title = "contact.";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />

      <main className="grow mx-auto max-w-7xl w-full px-4 sm:px-6">
        <section className="pt-32 pb-20 md:pt-48">
          
          {/* Main heading with matching character hover effect */}
          <h1 className="text-black text-6xl sm:text-7xl lg:text-9xl tracking-tight font-bold mb-12 select-none">
            {title.split('').map((letter, index) => (
              <span 
                key={index} 
                className="inline-block transition-all duration-100 hover:text-[#4e1594] hover:scale-110 origin-bottom cursor-default"
              >
                {letter}
              </span>
            ))}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
            
            {/* Minimalist Contact Message */}
            <div className="space-y-6 text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              <p>
                You can catch me online through these platforms. Feel free to reach out. I'm always open to chat.
              </p>
            </div>

            {/* Social Channels Sheet */}
            <div className="border-l border-gray-100 pl-6 lg:pl-12 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Find me on</h3>
              
              <div className="space-y-4">
                {/* GitHub Link */}
                <Link 
                  href="https://github.com/devmrcapy03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black hover:text-[#4e1594] text-xl font-medium group transition-colors duration-200"
                >
                  {/* Inline GitHub SVG */}
                  <svg className="w-6 h-6 fill-black group-hover:fill-[#4e1594] transition-colors duration-200" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>github</span>
                </Link>

                {/* Discord Link */}
                <div className="flex items-center gap-3 text-black hover:text-[#4e1594] text-xl font-medium group transition-colors duration-200 cursor-default">
                  {/* Inline Discord SVG */}
                  <svg className="w-6 h-6 fill-black group-hover:fill-[#4e1594] transition-colors duration-200" viewBox="0 0 127.14 96.36">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.64-10.84,68.34,68.34,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2a75.58,75.58,0,0,0,72.72,0c.82.71,1.68,1.4,2.58,2a68.31,68.31,0,0,1-10.5,5,74.65,74.65,0,0,0,6.64,10.84,105.73,105.73,0,0,0,31.05-18.83C129.87,50.11,123.77,27.31,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.92,46,53.72,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.16,46,96,53,91,65.69,84.69,65.69Z"/>
                  </svg>
                  <span>@mrcapy03</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}