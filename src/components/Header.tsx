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

  <div  className=' text-grey-50 font-semiboldbold  h-16 w-full flex justify-between items-center'>
    <div  ref={gsapRef} className='ml-2 flex h-16 '>
        <Image 
        src="/logo.png"
        width={100}
        height={100}
        alt="Logo"
        loading='eager'
        style={{ width: 'auto' }}
        />
        
        
        <a  href="/" className='flex-col justify-around'>
            <h1 className='text-black font-bold text-4xl underline'>UIB</h1>
            <p className='text-black text-[15px]'>Underrated Indian Business</p>
        </a>
        


    </div>
    <div ref={gsapRef} className='flex gap-10 font-semibold '>
        <a href='/'>Home</a>
        <a href='/About'>About Us </a>
        <a href='Contact'>Contact Us</a>
    </div>
    
    <ClerkProvider>
          <header className="flex justify-end items-center font-semibold text-black p-4 gap-5 h-16">
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
