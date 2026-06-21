'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function MainPage() {
  const username = "@mrcapy03.";
  const [timeString, setTimeString] = useState("");
  const router = useRouter();
  
  // Tracks the clicked sequence across renders
  const clickedIndices = useRef<number[]>([]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Madrid',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Madrid',
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

      const timePart = timeFormatter.format(now);
      const datePart = dateFormatter.format(now);

      setTimeString(`${timePart} on ${datePart}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handles checking sequential clicks/taps
  const handleLetterClick = (e: React.PointerEvent, index: number) => {
    const nextExpectedIndex = clickedIndices.current.length;

    if (index === nextExpectedIndex) {
      // User clicked/tapped the correct consecutive letter
      clickedIndices.current.push(index);

      if (clickedIndices.current.length === username.length) {
        router.push('/surprise');
      }
    } else if (index === 0) {
      // Reset progress to just the first letter if they start over
      clickedIndices.current = [0];
    } else {
      // Combo broken; reset progress completely
      clickedIndices.current = [];
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />

      <main className="grow mx-auto max-w-7xl w-full px-4 sm:px-6">
        
        <section className="pt-32 pb-20 md:pt-48">

          <span className='text-lg text-gray-50'>try clicking/tapping every letter in order</span>
          <h1 className="text-black text-6xl sm:text-7xl font-bold lg:text-9xl tracking-tight select-none">
            {username.split('').map((letter, index) => (
              <span 
                key={index} 
                // onPointerDown handles both mouse clicks and touch taps instantly
                onPointerDown={(e) => handleLetterClick(e, index)}
                // 'touch-action: manipulation' prevents double-tap zooming on mobile browsers
                style={{ touchAction: 'manipulation' }}
                className="inline-block transition-all duration-100 cursor-pointer text-black hover:text-[#4e1594] hover:scale-110 active:text-[#4e1594] active:scale-95 origin-bottom"
              >
                {letter}
              </span>
            ))}
          </h1>
          
          <h2 className="text-black text-3xl sm:text-4xl lg:text-6xl mt-6 leading-tight">
            ui/ux designer and programmer.
          </h2>
          
          <h3 className="text-gray-500 text-lg sm:text-xl lg:text-3xl mt-4">
            {timeString ? `it is ${timeString} for me (CEST, UTC+2).` : "Loading clock."}
          </h3>
        </section>
        
      </main>

      <Footer/>
    </div>
  )
}