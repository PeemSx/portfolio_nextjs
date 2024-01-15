import React from 'react'

const Certificate = (props) => {
    const path = props.path;
    console.log(props)


    return (
        <div className='p-8 m-8 rounded-xl font-semibold flex flex-col justify-center items-center space-y-4 shadow-2xl'  style={{minHeight: "40vh",backgroundColor: "#474747" }}>
          <h1 className='text-center text-lg'>National Software Contest Finalist</h1>
         
            <img src={path} alt='' className='w-2/3 mx-auto'></img>
            <h2 className='text-balance text-center'>
                I developed an 8-bit adventurous game for education named “Periodic Table Game”
            </h2>
          
          
        </div>
      )
}

export default Certificate
