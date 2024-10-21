'use client'

import { useState, useEffect } from 'react'

export default function SurfSpotsMap() {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        () => {
          console.log('Unable to retrieve your location')
        }
      )
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 font-inter">Surf Spots Map</h1>
      <div className="bg-gray-100 h-96 rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-center text-gray-600">
          Interactive map will be implemented here
          <br />
          <span className="text-sm">
            (Your location - Lat: {userLocation.lat.toFixed(4)}, Lng: {userLocation.lng.toFixed(4)})
          </span>
        </p>
      </div>
    </div>
  )
}