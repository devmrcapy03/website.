'use client'

import { useEffect, useRef, useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function SurprisePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [showUnmutePrompt, setShowUnmutePrompt] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    
    video.play()
      .then(() => {
        setIsMuted(false)
      })
      .catch((error) => {
        console.log("Unmuted autoplay blocked. Falling back to muted.", error)
        
        video.muted = true
        setIsMuted(true)
        setShowUnmutePrompt(true)
        
        video.play().catch(err => console.error("Muted autoplay failed too:", err))
      })
  }, [])

  const handleUnmute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    setIsMuted(false)
    setShowUnmutePrompt(false)
    video.currentTime = 0 
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />

      <main className="grow flex flex-col items-center justify-center mx-auto max-w-7xl w-full px-4 sm:px-6 py-20">
        
        <div className="w-full max-w-3xl text-center space-y-6">
          <h1 className="text-black text-4xl sm:text-5xl font-bold tracking-tight">
            ta-da.
          </h1>


          <div className="relative mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-2xl bg-black aspect-video group">
            <video 
              ref={videoRef}
              src="/secretsauce.webm" 
              controls 
              playsInline 
              className="w-full h-full object-cover"
              controlsList="nodownload"
            >
              your browser does not support the video tag.
            </video>

            {/* Floating Unmute Banner if browser blocked the initial audio */}
            {showUnmutePrompt && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300">
                <button
                  onClick={handleUnmute}
                  className="bg-[#eb4279] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
                >
                  <span>🔊 Click to Unmute</span>
                </button>
              </div>
            )}
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}