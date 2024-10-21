
import FeaturedPhotos from '../components/features/FeaturedPhotos'
import Image from 'next/image'
import Hero from '../components/features/Hero'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sección con imagen de fondo para Map */}
      <section className="relative flex-grow">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gowave-e46ce.appspot.com/o/gradient-lean2.jpg?alt=media&token=26fd0c7e-178f-40fc-9aca-da20cd5257b6"
          alt="Fondo gradiente"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 py-8">
          <Hero />
        </div>
      </section>

      {/* Sección con fondo blanco para FeaturedPhotos */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <FeaturedPhotos />
        </div>
      </section>
    </div>
  )
}