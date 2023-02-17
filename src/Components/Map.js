import React from 'react'

const Map = () => {
  return (
    <div className=' rounded-[50%] h-40 aspect-square shadow-md shadow-neutral-50 fixed left-2 bottom-8 overflow-hidden'>
        <img src={require("./map.png")} alt="map" />
    </div>
  )
}

export default Map