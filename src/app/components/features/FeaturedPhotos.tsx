'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function FeaturedPhotos() {
  const photos = [
    { id: 1, src: '/placeholder.svg?height=400&width=600', alt: 'Surf 1' },
    { id: 2, src: '/placeholder.svg?height=400&width=600', alt: 'Surf 2' },
    { id: 3, src: '/placeholder.svg?height=400&width=600', alt: 'Surf 3' },
    { id: 4, src: '/placeholder.svg?height=400&width=600', alt: 'Surf 4' },
    { id: 5, src: '/placeholder.svg?height=400&width=600', alt: 'Surf 5' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Fotos Destacadas</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photos.map((photo) => (
              <div key={photo.id} className="w-full flex-shrink-0">
                <div className="relative h-64 md:h-96 mx-2">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}