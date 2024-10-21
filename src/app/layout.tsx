import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../context/AuthContext'
import Navbar from './components/layout/navbar'
import { Toaster } from "@/components/ui/toaster"
import { Footer } from './components/layout/footer'

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
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}