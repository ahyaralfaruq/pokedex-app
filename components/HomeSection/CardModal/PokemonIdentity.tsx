import React from 'react'

const PokemonIdentity = ({id, name} : { id: number; name: string}) => {
  return (
    <>
      <span className="font-tomorrow text-2xl">
        { name.toUpperCase() }
      </span>
      <span className="font-tomorrow text-2xl font-normal">
        #{ id.toString().padStart(4, "0") }
      </span>
    </>
  )
}

export default PokemonIdentity