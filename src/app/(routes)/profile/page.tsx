'use client'

import { useAuth } from '../../../context/AuthContext'

export default function ProfilePage() {
  const { user } = useAuth()

  if (!user) {
    return <div>Por favor, inicia sesión para ver tu perfil.</div>
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <p className="text-gray-700">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Rol
          </label>
          <p className="text-gray-700">{user.role}</p>
        </div>
      </div>
    </div>
  )
}