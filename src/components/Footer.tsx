import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap justify-evenly items-center sm:items-start w-full mt-5 border-t-2 border-b-2 border-black bg-gray-200 text-center sm:text-left'>
        <div className='p-4 sm:p-6 gap-3'>
            <p className='text-lg sm:text-xl font-semibold'>Products</p>
            <p><a href='/'>Home</a></p>
            <p><a href='/Okra'>Okra</a></p>
            <p><a href='/Refi'>Refined Oil</a></p>
            <p><a href='/FoxNuts'>FoxNuts</a></p>
            <p><a href='/Gum'> Tragacanth Gum</a></p>
        </div>
        <div className='p-4 sm:p-6 gap-3'>
            <p className='text-lg sm:text-xl font-semibold'>Info</p>
            <p><a href='/About'>About Us</a></p>
            <p><a href='/Contact'>Contact Us</a></p>
        </div>
        <div className='p-4 sm:p-6 gap-3'>
            <p className='text-lg sm:text-xl font-semibold'>Policies</p>
            <p><a href='/T&C'>Terms & Conditions</a></p>
            <p><a href='/Cookie'>Cookie Policy</a></p>
            <p><a href='/Privacy'>Privacy Policy</a></p>
            <p><a href='/UP'>User Policy</a></p>
        </div>
        
    </div>
  )
}

export default Footer
