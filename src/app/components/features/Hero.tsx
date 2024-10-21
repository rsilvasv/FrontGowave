import Image from 'next/image'

export default function Hero() {
  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6">
          <div className="relative h-80 md:h-112 rounded-lg overflow-hidden">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/home-photo.jpg?alt=media&token=acbc0790-a655-49b5-950e-8f0e3ee2fe5d"
              alt="Surfista en acción"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
            Ride the waves, capture the moments.
          </h1>
        </div>
      </div>
    </div>
  )
}