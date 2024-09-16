"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [username, setUsername] = useState('')

  const handleAnalyze = () => {
    // Placeholder for analysis logic
    console.log(`Analyzing account: ${username}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center p-4 text-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600 animate-pulse">
            TikTok Performance Analyzer
          </h1>
          <p className="text-xl text-gray-300">
            Analyze the quality of your TikTok account with a quick performance check.
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter TikTok Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out text-white placeholder-gray-400"
            />
            <div className="absolute inset-0 border border-gray-600 rounded-lg pointer-events-none"></div>
          </div>
          
          <Button
            onClick={handleAnalyze}
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Analyze Account
          </Button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 bg-black bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
            We'll analyze the last 10 videos to give you a performance grade based on engagement rates.
          </p>
        </div>
      </div>
      
      {/* Futuristic background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  )
}