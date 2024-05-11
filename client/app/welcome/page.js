'use client'
import React from 'react'
import { useSession } from 'next-auth/react';
const page = () => {
    
    const {data:session} = useSession();


  return (
    <div className='w-full flex text-center justify-center'>
      <h1>welcome krub</h1>
    </div>
  )
}

export default page
