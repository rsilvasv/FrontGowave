'use client'

import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepSignedIn, setKeepSignedIn] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await login(email, password)
      router.push('/profile')
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-4xl font-bold font-inter mb-6 mt-6 text-center">Sign in to GoWave.</h1>
      <p className="text-center font-inter mb-6">
        Need an account?{' '}
        <Link href="/auth/register" className="text-blue-600 font-inter hover:underline">
          Sign up
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="/auth/forgot-password" className="text-sm text-blue-600 font-inter hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="keepSignedIn" 
            checked={keepSignedIn} 
            onCheckedChange={(checked) => setKeepSignedIn(checked as boolean)}
          />
          <label htmlFor="keepSignedIn" className="text-sm font-inter text-gray-600">
            Keep me signed in
          </label>
        </div>
        <Button type="submit" className="w-full font-inter">
          Sign In
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
          <FcGoogle className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
      </div>
      <div className="mt-6 text-center text-sm text-gray-600">
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        {' | '}
        <Link href="/terms" className="hover:underline">Terms of Use</Link>
        {' | '}
        <Link href="/do-not-sell" className="hover:underline">Do Not Sell My Personal Information</Link>
      </div>
    </div>
  )
}