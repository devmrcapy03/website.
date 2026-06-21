'use client'

import { useEffect } from 'react'

export default function SurprisePage() {
  useEffect(() => {
    window.location.replace('https://www.youtube.com/watch?v=QDia3e12czc')
  }, [])

  return (
    // A clean, simple loading state in case the user's internet takes a split second to jump
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-black text-2xl font-semibold animate-pulse">
          redirecting.
        </h1>
      </div>
    </div>
  )
}