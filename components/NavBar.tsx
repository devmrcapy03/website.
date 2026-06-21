import Link from 'next/link'

export default function NavBar() {
    return(
    <header className="sticky z-50 top-0 w-full h-16 bg-white">
      <nav className="mx-auto max-w-6xl h-full px-4 sm:px-6 lg:px-6">
        <div className="flex h-full items-center justify-between">
          <div className='flex items-center'>
            <Link href={"/"} className='hover:scale-120 hover:text-[#eb4279] transition-all duration-300 text-black font-semibold text-xl'>home.</Link>
          </div>
          
          <div className='flex items-center gap-8'>
            <Link href={"/about"} className='hover:scale-120 hover:text-[#eb4279] transition-all duration-300 text-black font-semibold text-xl'>about me.</Link>
            <Link href={"/contact"} className='hover:scale-120 hover:text-[#eb4279] transition-all duration-300 text-black font-semibold text-xl'>contact.</Link>
          </div>
        </div>
      </nav>
    </header>
    )
}