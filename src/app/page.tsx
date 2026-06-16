import { auth } from "@clerk/nextjs/server";


import Branding from '@/components/Branding';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Slider from '@/components/Slider';



import React from 'react'

const page = async () => {
  const { userId } = await auth();
  if (!userId) return <>
  <Header/>
  <Branding/>
   
  <Slider/>
  
  
  <Footer/>
  </>
  return <>
  <Header/>
  <Branding/>
   
  <Slider/>
  
  
  <Footer/>
  </>;
  



}
export default page