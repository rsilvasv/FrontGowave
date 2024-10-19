'use client'

import { useAuth } from '../../../context/AuthContext'

export default function CartPage() {
  const { user } = useAuth()

  if (!user) {
    return <div>Por favor, inicia sesión para ver tu carrito.</div>
  }

  // Aquí iría la lógica para obtener los items del carrito
  const cartItems = [
    { id: 1, name: 'Foto de surf 1', price: 19.99 },
    { id: 2, name: 'Foto de surf 2', price: 24.99 },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">Total:</span>
            <span className="font-bold">
              ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </span>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proceder al pago
        </button>
      </div>
    </div>
  )
}