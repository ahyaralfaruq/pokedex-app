import React from 'react'

const PokemonTypes = ({ types }: { types: any[] }) => {
  return (
    <div className="w-full">
      <p className="text-base lg:text-lg xl:text-2xl text-white font-tomorrow mb-6">
        Type:
      </p>

      <div className="flex flex-wrap items-center content-start justify-start gap-2 mb-12">
        {
          types.map((type, i) => (
            <div key={i} className="green-pink-gradient p-[1px] rounded-[20px]">
              <div className='bg-tertiary rounded-[20px] py-2 px-5 lg:px-8'>
                <span className="text-base lg:text-lg text-white font-tomorrow">
                  { type.type.name }
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PokemonTypes