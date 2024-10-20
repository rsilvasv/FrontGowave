'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, User, Menu, LogOut } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function Component() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/GoWaveLogo.png?alt=media&token=97078b55-ec41-4ecc-8937-9c02b38dde72"

  return (
    <nav className="bg-white shadow-sm">
      <div className="w-auto mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-[56px]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {logoUrl && (
                <img src={logoUrl} alt="Logo" className="h-7  " />
              )}
              <span className="font-harmoni text-xl text-black-900 ml-2 flex items-center leading-none">GoWave</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <NavLinks pathname={pathname} user={user} logout={logout} />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-black-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks pathname={pathname} user={user} logout={logout} />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks({ pathname, user, logout }: { pathname: string; user: any; logout: () => void }) {
  return (
    <>
      <Link 
        href="/cart" 
        className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium ${
          pathname === '/cart' ? 'bg-gray-100' : ''
        }`}
      >
        <ShoppingCart className="inline-block h-4 w-4 mr-1" />
        <span className="hidden sm:inline">Carrito</span>
      </Link>
      {user ? (
        <>
          <Link 
            href="/dashboard" 
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
          >
            Consola
          </Link>
          <button
            onClick={logout}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
          >
            <LogOut className="inline-block h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Cerrar Sesión</span>
          </button>
        </>
      ) : (
        <Link 
          href="/auth/login" 
          className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium ${
            pathname === '/auth/login' ? 'bg-gray-100' : ''
          }`}
        >
          <User className="inline-block h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Login</span>
        </Link>
      )}
    </>
  )
}