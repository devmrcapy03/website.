import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'about me. | mrcapy03.',
  description: 'A student, programmer, and UI/UX designer based in Spain. Passionate about Figma, Python, Next.js, AI, and aviation.',
}

export default function AboutPage() {
  const title = "about me.";

  return (
    <div className="flex min-h-screen flex-col bg-white overflow-hidden">
      <NavBar />

      {/* Replaced pt-32 pb-20 with tight vertical offsets to stay within safe viewport heights */}
      <main className="grow mx-auto max-w-7xl w-full px-4 sm:px-6 flex items-center">
        <section className="w-full pt-24 pb-12 md:pt-32">
          
          {/* Dropped mb-12 down to mb-6 to gain back vertical room */}
          <h1 className="text-black text-6xl sm:text-7xl lg:text-9xl tracking-tight font-bold mb-6 select-none">
            {title.split('').map((letter, index) => (
              <span 
                key={index} 
                className="inline-block transition-all duration-100 hover:text-[#4e1594] hover:scale-110 origin-bottom cursor-default"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          {/* Adjusted grid layout gap spacing from 12 to 8 */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
            
            {/* Biography */}
            <div className="space-y-4 text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              <p>
                Hello there wanderer. I'm <span className="text-black font-semibold">@mrcapy03</span>—a student, programmer, and UI/UX designer based in Spain.
              </p>
              <p>
                I like designing mock interfaces, posters, in Figma. Code things with Python, Next.js and AI. I'm really into computers, video games, F1, and aviation. I'm somewhat of a maths and physics nerd.
              </p>
            </div>

            {/* Sidebar quick-scan data sheet with tighter row spacing */}
            <div className="border-l border-gray-100 pl-6 lg:pl-12 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Design Tools</h3>
                <p className="text-black text-base lg:text-lg mt-0.5 font-medium">Figma</p>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Development Stack</h3>
                <p className="text-black text-base lg:text-lg mt-0.5 font-medium">Next.js, Python, AI, React, Tailwind CSS, Luau</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Interests</h3>
                <p className="text-black text-base lg:text-lg mt-0.5 font-medium">Computers, Aviation, Formula 1, Games, Maths & Physics</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Languages</h3>
                <p className="text-black text-base lg:text-lg mt-0.5 font-medium">Spanish (Native), English (Fluent; Cambridge C1 certified)</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}