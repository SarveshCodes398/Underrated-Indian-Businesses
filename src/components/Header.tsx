"use client";
import React, { useRef } from 'react'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from "next/image";
import gsap, { Bounce } from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
    const gsapRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!gsapRef.current) return

    gsap.to(gsapRef.current, {
      y:2,
      duration:1,
      repeat: 1,
      yoyo:true

    })
  })
  return (<>

  <div  className='text-grey-50 font-semiboldbold w-full flex flex-wrap justify-between items-center gap-2 sm:gap-0 min-h-16 h-auto sm:h-16 px-2 sm:px-0 py-2 sm:py-0'>
    <div  ref={gsapRef} className='ml-0 sm:ml-2 flex items-center h-auto sm:h-16 shrink-0'>
        <Image 
        src="/logo.png"
        width={100}
        height={100}
        alt="Logo"
        loading='eager'
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-[100px] md:h-[100px]"
        style={{ width: 'auto', height: 'auto' }}
        />
        
        
        <a  href="/" className='flex-col justify-around'>
            <h1 className='text-black font-bold text-xl sm:text-2xl md:text-4xl underline'>UIB</h1>
            <p className='text-black text-[11px] sm:text-[13px] md:text-[15px]'>Underrated Indian Business</p>
        </a>
        


    </div>
    <div ref={gsapRef} className='flex flex-wrap gap-3 sm:gap-6 md:gap-10 font-semibold text-sm sm:text-base'>
        <a href='/'>Home</a>
        <a href='/About'>About Us </a>
        <a href='Contact'>Contact Us</a>
    </div>
    
    <ClerkProvider>
          <header className="flex justify-end items-center font-semibold text-black p-2 sm:p-4 gap-2 sm:gap-5 h-auto sm:h-16 shrink-0">
            <Show when="signed-out" >
              <SignInButton  />
              <SignUpButton>
                <button className=" text-black p-1  bg-black/10 rounded-md border-4 border-black font-semibold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
        </ClerkProvider>
  </div>

  
  </>
  )
}

export default Header
