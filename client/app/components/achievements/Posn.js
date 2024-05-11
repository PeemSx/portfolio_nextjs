import React from 'react'

const Posn = () => {
  return (
    <div className='rounded-xl p-8 m-8 flex flex-col justify-center items-center space-y-4 shadow-2xl' style={{minHeight: "40vh",backgroundColor: "#474747" }}>
      <h1 className='text-center text-lg'>POSN Computer Camp</h1>
        
        <img src='images/POSN.png' alt='posn' className='w-2/3 mx-auto'></img>
        <h2 className='text-center'>
            It’s the absolutely perfect camp, which has increased my programming skills apperently.
        </h2>
    </div>
  )
}

export default Posn
