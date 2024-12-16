'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useCountdown from '../utils/useCountdown'
import CountdownTimer from './CountdownTimer'
import { motion } from 'framer-motion'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const timeLeft = useCountdown('2025-01-01')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ebe5de] to-[#d8cec5] flex flex-col items-center justify-center text-center p-4">
      <motion.div 
        className="w-full max-w-lg mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/logo_without_bg.svg"
          alt="Ethnotique.in Logo"
          width={400}
          height={400}
          className="mx-auto"
        />
      </motion.div>
    
      <motion.p 
        className="text-2xl md:text-3xl text-[#685147] mb-16 font-light tracking-wide"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Weaving Timeless Traditions into Modern Luxuries
      </motion.p>
    
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <CountdownTimer timeLeft={timeLeft} />
      </motion.div>

      <motion.p 
        className="text-lg md:text-xl text-[#685147] mb-12 max-w-lg font-light"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Get ready to explore a world of exquisite Indian handmade jewelry, clothing, and more. 
        Launching on January 1, 2025!
      </motion.p>

      <motion.form 
        onSubmit={handleSubmit} 
        className="flex flex-col md:flex-row gap-4 w-full max-w-md mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/80 border-[#b49d91] text-[#685147] placeholder-[#b49d91] focus:ring-[#685147] focus:border-[#685147]"
        />
        <Button type="submit" className="bg-[#685147] hover:bg-[#b49d91] text-white transition-colors duration-300 px-8">
          Notify Me
        </Button>
      </motion.form>

      <motion.footer 
        className="text-[#b49d91] absolute bottom-4 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p>&copy; 2024 Ethnotique.in. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}

