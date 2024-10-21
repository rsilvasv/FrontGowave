import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../context/AuthContext'
import Navbar from './components/layout/navbar'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SurfShop - Fotografías de Surf',
  description: 'Plataforma de venta de fotografías de surf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
              <p className="text-center text-gray-600">© 2024 SurfShop. Todos los derechos reservados.</p>
            </div>
          </footer>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}