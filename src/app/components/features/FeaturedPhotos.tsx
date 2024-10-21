'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { Button } from "@/components/ui/button"

export default function FeaturedPhotos() {
  const photos = [
    { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/cutwave.jpg?alt=media&token=2f592563-35f7-4ee8-adde-90d341d5f5d2', alt: 'Surf 1' },
    { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/epic-long.jpg?alt=media&token=7f4f70a8-4fc5-4e2d-ad54-2753466b3b9b', alt: 'Surf 2' },
    { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/epicwave.jpg?alt=media&token=6f48262e-fc3f-4da5-9266-fd02a4a583af', alt: 'Surf 3' },
    { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/surf-airwave.jpg?alt=media&token=e4bd7537-0b6a-403c-bb2d-08bea12fefb4', alt: 'Surf 4' },
    { id: 5, src: 'https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/tablas-surf.jpg?alt=media&token=7d4b4c24-6f26-4933-9eeb-bf5c10bb9a8d', alt: 'Surf 5' },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="m-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold font-inter">Featured Photos</h2>
        <div className="flex gap-2">
          <Button
            onClick={scrollPrev}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={scrollNext}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {photos.map((photo) => (
            <div key={photo.id} className="flex-[0_0_30%] min-w-0 pl-4">
              <div className="relative h-64 md:h-96">
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
    </section>
  )
}