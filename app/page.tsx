'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function MainPage() {
  const username = "@mrcapy03.";
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Separate formatters lock the timezone to Spain and prevent system locale from breaking the UI layout
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

    // Clean up the interval on unmount to keep things fast and leak-free
    return () => clearInterval(timer);
  }, []);

  return (
    // min-h-screen + flex-col stretches the viewport so the footer always stays pinned to the bottom
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />

      {/* grow expands the main tag vertically to push the footer down */}
      <main className="grow mx-auto max-w-7xl w-full px-4 sm:px-6">
        
        <section className="pt-32 pb-20 md:pt-48">
          {/* select-none stops users from accidentally text-highlighting the letters while playing with the hover */}
          <h1 className="text-black text-6xl sm:text-7xl font-bold lg:text-9xl tracking-tight select-none">
            {/* Splits string into an array to attach hover and hardware-accelerated scaling to single characters */}
            {username.split('').map((letter, index) => (
              <span 
                key={index} 
                className="inline-block transition-all duration-100 hover:text-[#eb4279] hover:scale-110 origin-bottom cursor-default"
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