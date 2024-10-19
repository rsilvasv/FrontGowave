'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, User, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-harmoni text-xl font-bold">SurfShop</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <NavLinks pathname={pathname} />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks pathname={pathname} />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      <Link 
        href="/auth/login" 
        className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium ${
          pathname === '/auth/login' ? 'bg-gray-100' : ''
        }`}
      >
        <User className="inline-block h-5 w-5 mr-1" />
        <span className="hidden sm:inline">Login</span>
      </Link>
      <Link 
        href="/cart" 
        className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium ${
          pathname === '/cart' ? 'bg-gray-100' : ''
        }`}
      >
        <ShoppingCart className="inline-block h-5 w-5 mr-1" />
        <span className="hidden sm:inline">Carrito</span>
      </Link>
      <Link 
        href="/dashboard" 
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Console
      </Link>
    </>
  )
}