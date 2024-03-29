import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <div className=' min-h-screen w-full relative'>
        <Image
          src='/bg.svg'
          layout='fill' // required
          objectFit='cover' // change to suit your needs
          //   className='rounded-full'
          alt='Next.svg'
        />
      </div>
    </>
  );
}
