'use client'

import { useState, useEffect } from 'react'

export default function Map() {
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
    <div className="bg-gray-200 h-64 md:h-96 mb-8 flex items-center justify-center rounded-lg overflow-hidden">
      <p className="text-center text-gray-600">
        Mapa de spots de surf
        <br />
        <span className="text-sm">
          (Lat: {userLocation.lat.toFixed(4)}, Lng: {userLocation.lng.toFixed(4)})
        </span>
      </p>
      {/* Aquí integraremos Google Maps más adelante */}
    </div>
  )
}