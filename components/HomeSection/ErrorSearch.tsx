import React from 'react'

const ErrorSearch = ({ handleError }:{ handleError: () => void }) => {
  return (
    <>
      <h3 className="font-tomorrow text-white text-center text-2xl md:text-4xl mb-12">
        POKEMON NOT FOUND
      </h3>

      <h1 className="font-tomorrow text-red-600 text-center text-7xl mb-4">
        4.0.4
      </h1>

      <p className="font-tomorrow text-white text-center mb-24">Pokemon tidak ditemukan</p>
      
      <div className="text-center">
        <button 
          type="button" 
          className="green-pink-gradient p-[1px] rounded-[20px]"
          onClick={() => handleError()}
        >
          <div className="bg-tertiary rounded-[20px] py-2 px-12 flex justify-evenly items-center flex-col">
            BACK
          </div>
        </button>
      </div>
    </>
  )
}

export default ErrorSearch