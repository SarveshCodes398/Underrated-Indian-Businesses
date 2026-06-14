
import Branding from '@/components/Branding';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Slider from '@/components/Slider';



import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <Branding/>
     ({/* ... 
    <div className='mt-3 w-[90%] h-[90%]'>
    <Slider/>
    </div>
    */})
    <Footer/>
    </>
  )
}

export default page

