'use client'

import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

export default function UploadPage() {
  const { user } = useAuth()
  const [file, setFile] = useState<File | null>(null)

  if (user?.role !== 'photographer') {
    return <div>No tienes permiso para acceder a esta página.</div>
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para subir la foto
    console.log('Subiendo archivo:', file)
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Subir Foto</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
            Seleccionar foto
          </label>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Subir
          </button>
        </div>
      </form>
    </div>
  )
}