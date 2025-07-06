"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="georgian-text text-xl font-bold text-white">{"Hennessy Dynasty"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="georgian-text text-white hover:text-red-400 transition-colors">
              მთავარი
            </Link>
            <Link href="/about" className="georgian-text text-white hover:text-red-400 transition-colors">
              ჩვენს შესახებ
            </Link>
            <Link href="/blacklist" className="georgian-text text-white hover:text-red-400 transition-colors">
              შავი სია
            </Link>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href="https://discord.gg/AwyqxagxK5" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="georgian-text">{"DISCORD სერვერი"}</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2">
              <Link
                href="/"
                className="georgian-text block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                მთავარი
              </Link>
              <Link
                href="/about"
                className="georgian-text block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ჩვენს შესახებ
              </Link>
              <Link
                href="/blacklist"
                className="georgian-text block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                შავი სია
              </Link>
              <a
                href="https://discord.gg/AwyqxagxK5"
                target="_blank"
                rel="noopener noreferrer"
                className="georgian-text block px-3 py-2 text-red-400 hover:text-red-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Discord-ში შემოერთება
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
