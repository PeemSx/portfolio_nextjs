import React from 'react'

const Certificate = (props) => {
    const path = props.path;
    // console.log(props)


    return (
        <div className='sm:max-lg:p-4 p-8 m-8 rounded-xl font-semibold flex flex-col justify-center items-center space-y-4 shadow-2xl'  style={{minHeight: "40vh",backgroundColor: "#474747" }}>
          <h1 className='text-center text-lg'>{props.header}</h1>
         
            <img src={path} alt='' className='sm:max-lg:w-full w-2/3 mx-auto'></img>
            <h2 className='sm:max-lg:hidden text-balance text-center'>
                {props.description}
            </h2>
          
          
        </div>
      )
}

export default Certificate
