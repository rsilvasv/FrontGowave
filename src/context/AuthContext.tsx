'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

type User = {
  id: string
  name: string
  email: string
  role: 'user' | 'photographer' | 'admin'
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    // Aquí podrías verificar si hay una sesión activa al cargar la página
    // Por ejemplo, comprobando una cookie o un token en localStorage
    const checkAuth = async () => {
      // Simularemos una verificación de autenticación
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // Aquí iría tu lógica de autenticación real
    // Por ahora, simularemos un login exitoso
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      role: 'user'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}