import React, { useState, useEffect, useCallback, useRef } from 'react'
import { functions, isEqual, omit } from 'lodash'
const MapDisplay = (options, onMount, className, onMountProps) => {
  const ref = useRef()
  const [map, setMap] = useState()

  useEffect(() => {
    // The Google Maps API modifies the options object passed to
    // the Map constructor in place by adding a mapTypeId with default
    // value 'roadmap'. { ...options } prevents this by creating a copy.
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, { ...options }))
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src = `https://maps.googleapis.com/maps/api/js?&key=AIzaSyB15pdOAHZvpqq4xIV7TkwbFY_g57kCMbQ`
      // process.env.GOOGLE_MAPS_API_KEY
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])

  if (map && typeof onMount === `function`) onMount(onMountProps)(map)

  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}
function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
  return noPropChange && noFuncChange
}

export default React.memo(MapDisplay, shouldNotUpdate)

MapDisplay.defaultProps = {
  options: {
    center: { lat: 37.497, lng: 127.115 },
    zoom: 15,
  },
}
