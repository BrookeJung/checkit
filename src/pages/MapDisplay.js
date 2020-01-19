import React, { useState, useEffect } from 'react'

const MapDisplay = () => {
  const [mapInfo, setMapInfo] = useState({
    center: {
      lat: 37.48,
      log: 127.04,
    },
    zoom: 14,
  })
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition, error)
    } else {
      alert('위치정보를 허용하세요.')
    }
  }, [])

  const getPosition = position => {
    const Latitude = position.coords.Latitude
    const Longitude = position.coords.Longitude
    setMapInfo({ ...mapInfo, center: { lat: Latitude, log: Longitude } })
    showMap()
  }

  const showMap = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'AIzaSyB15pdOAHZvpqq4xIV7TkwbFY_g57kCMbQ'
    script.id = 'googleMaps'
    document.body.appendChild(script)
    script.addEventListener('load', e => {
      console.log(e)
    })
  }

  const error = err => {
    console.log('에러')
  }
  return <div style={{ width: 500, height: 500 }} id={} />
}

export default MapDisplay
