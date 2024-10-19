'use client'

import { useAuth } from '../../../context/AuthContext'

export default function AdminPage() {
  const { user } = useAuth()

  if (user?.role !== 'admin') {
    return <div>No tienes permiso para acceder a esta página.</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
        <p>Usuarios totales: X</p>
        <p>Fotos subidas: Y</p>
        <p>Ventas totales: Z</p>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-2">Acciones</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Gestionar Usuarios
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Revisar Fotos
        </button>
      </div>
    </div>
  )
}