"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
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
};

export default Hero;
