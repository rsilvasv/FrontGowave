'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from 'react-icons/fc'

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepSignedIn, setKeepSignedIn] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would add the logic to register the user with Firebase
    console.log('Registering user:', { firstName, lastName, email, password, keepSignedIn })
    // After successful registration, redirect the user
    router.push('/auth/login')
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-4xl font-bold font-inter mb-6 mt-6 text-center">Create your free GoWave account</h1>
      <p className="text-center font-inter mb-6">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-blue-600 font-inter hover:underline">
          Sign in
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm font-inter text-gray-600">
              By creating an account, I agree to the GoWave{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-blue-600 font-inter hover:underline">
                Terms of Use
              </Link>
              .
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="keepSignedIn" 
              checked={keepSignedIn} 
              onCheckedChange={(checked) => setKeepSignedIn(checked as boolean)}
            />
            <label htmlFor="keepSignedIn" className="text-sm font-inter text-gray-600">
              Keep me signed in.
            </label>
          </div>
        </div>
        <Button type="submit" className="w-full font-inter">
          Create Account
        </Button>
      </form>
      
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or</span>
        </div>
      </div>

      <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
        <FcGoogle className="mr-2 h-4 w-4 font-inter" />
        Sign up with Google
      </Button>
      
      <p className="text-xs font-inter text-gray-600 mt-4">
        By clicking on Create Account, you consent to receive product and marketing updates from GoWave and its partners.
      </p>
      <p className="text-xs text-gray-600 mt-2">
        <Link href="/do-not-sell" className="text-blue-600 font-inter hover:underline">
          Do Not Sell My Personal Information
        </Link>
      </p>
    </div>
  )
}