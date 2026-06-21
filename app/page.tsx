'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation' // Imported for programmatic redirect
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function MainPage() {
  const username = "@mrcapy03.";
  const [timeString, setTimeString] = useState("");
  const router = useRouter();
  
  // useRef keeps track of the sequence across renders without causing unnecessary re-renders
  const hoveredIndices = useRef<number[]>([]);

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

  // Handles checking if the user is hovering the correct next character
  const handleMouseEnter = (index: number) => {
    const nextExpectedIndex = hoveredIndices.current.length;

    if (index === nextExpectedIndex) {
      // User hovered the correct next letter in line
      hoveredIndices.current.push(index);

      // If they successfully hovered all letters back-to-back
      if (hoveredIndices.current.length === username.length) {
        router.push('/surprise');
      }
    } else if (index === 0) {
      // If they hover the first letter again, reset progress to just the first letter
      hoveredIndices.current = [0];
    } else {
      // They broke the combo; reset the progress
      hoveredIndices.current = [];
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />

      <main className="grow mx-auto max-w-7xl w-full px-4 sm:px-6">
        
        <section className="pt-32 pb-20 md:pt-48">
          <h1 className="text-black text-6xl sm:text-7xl font-bold lg:text-9xl tracking-tight select-none">
            {username.split('').map((letter, index) => (
              <span 
                key={index} 
                onMouseEnter={() => handleMouseEnter(index)} // Trigger logic on hover
                className="inline-block transition-all duration-100 hover:text-[#4e1594] hover:scale-110 origin-bottom cursor-default"
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