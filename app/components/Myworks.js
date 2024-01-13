import React from 'react'
import Posn from './achievements/Posn'
import Nsc from './achievements/Nsc'
import Symposium from './achievements/Symposium'

const Myworks = () => {
  return (
    <div className='min-h-svh p-12'>
        <h1 className='text-center font-bold text-2xl'>My Works</h1>
        <div className='grid grid-cols-3'>
            <Posn/>
            <Nsc/>
            <Symposium/>
            
            

        </div>
    </div>
  )
}

export default Myworks
