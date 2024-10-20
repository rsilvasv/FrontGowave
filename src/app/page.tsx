import Map from './components/features/Map'
import FeaturedPhotos from './components/features/FeaturedPhotos'

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-harmoni text-center mb-8">Bienvenido a SurfShop</h1>
      <Map />
      <FeaturedPhotos />
    </>
  )
}