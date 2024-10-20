'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Tipo para un producto en el carrito
type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

export default function ShoppingCartSidebar() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Producto 1', price: 10, quantity: 1 },
    { id: '2', name: 'Producto 2', price: 20, quantity: 2 },
  ])
  const router = useRouter()
  const { toast } = useToast()

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCartItems([])
    toast({
      title: "Carrito vaciado",
      description: "Todos los productos han sido removidos del carrito.",
    })
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const checkout = () => {
    // Aquí iría la lógica para verificar si el usuario está autenticado
    // Por ahora, simplemente redirigimos al registro
    router.push('/auth/register')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Carrito de Compras</SheetTitle>
        </SheetHeader>
        <Card className="mt-4">
          <CardContent className="pt-6">
            {cartItems.length === 0 ? (
              <p>Tu carrito está vacío.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) - item.quantity)}
                        className="w-16 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => updateQuantity(item.id, -item.quantity)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-end space-y-4">
            <div className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={clearCart}>
                Vaciar Carrito
              </Button>
              <Button onClick={checkout}>
                Finalizar Compra
              </Button>
            </div>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  )
}