"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            Mountain Retreat
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-gray-900 hover:bg-gray-800"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('booking')}
                className="bg-gray-900 hover:bg-gray-800 w-full"
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
