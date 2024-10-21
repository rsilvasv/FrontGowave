import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6">
          <div className="relative h-96 md:h-[26rem] rounded-lg overflow-hidden">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/home-photo.jpg?alt=media&token=acbc0790-a655-49b5-950e-8f0e3ee2fe5d"
              alt="Surfista en acción"
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-inter">
            Ride the waves, capture the moments.
          </h1>
          <h6 className='text-sm font-semibold text-white mb-6 font-inter'>
            Waves. Nature. Stories. Adventure. Captures.
          </h6>
          <Link href="/surf-spots">
            <Button className="rounded-full bg-white font-inter text-m text-white-900 px-6 py-3 shadow hover:bg-black hover:text-white transition">
              Find Surf Spots
            </Button>
          </Link>          
        </div>
      </div>
    </div>
  )
}