
import React from 'react'
import { headers } from 'next/headers'

const page = () => {
  
  const headersList = headers();

  return (
    <div className='w-full flex text-center justify-center'>
      <h1>welcome krub</h1>
    </div>
  )
}

export default page
