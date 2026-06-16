import React from 'react'

const Branding = () => {
  return (
    <>
    <div className='w-[95%] max-w-full mx-auto sm:left-10 left-0 relative mt-4 sm:mt-7 rounded-xl flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5 p-4 sm:p-6 md:p-10 min-h-48 sm:min-h-64 md:h-96 border-2 border-black'>
      <div className='gap-3 justify-center items-center'>
      <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-shadow-black font-extrabold text-center'>Welcome</h1>
      </div>
      <div className='flex-col m-1 sm:m-2 gap-3 sm:gap-7'>
      <p className='text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-gray-950'> to Underrated Indian Business Website </p>
      <p className='font-medium text-sm sm:text-lg md:text-2xl text-center text-black'>Explore your fav Businesses</p>
      </div>

    </div>
    </>
  )
}

export default Branding

