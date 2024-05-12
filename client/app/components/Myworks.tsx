import React from 'react'
import Posn from './achievements/Posn'
import Nsc from './achievements/Nsc'
import Symposium from './achievements/Symposium'
import Certificate from './achievements/Certificate'

const Myworks = () => {
  const paths = [{
    header: "POSN Computer",
    path:'images/POSN.png',
    description:"It’s the absolutely perfect camp, which has increased my programming skills apperently.",
    
  },{
    header: "National Software Contest",
    path:'images/NSC2022.png',
    description:"I developed an 8-bit adventurous game for education named “Periodic Table Game”.",
  },{
    header: "PCSHS Symposium",
    path:'images/Symposium.png',
    description:"I was quanlified to be an English oral presenter to present my game project.",
  }]
  
  const works =  paths.map((obj) => (
    <Certificate path={obj.path} header={obj.header} description={obj.description} key={obj.header}/>
  )
  )

  return (
    <div className='min-h-svh p-12'>
        <h1 className='text-center font-bold text-2xl'>My Works</h1>
        <div className='sm:grid sm:max-lg:grid-cols-1  xl:grid-cols-3'>
            {works}
            {/* <Certificate path={paths} /> */}
            {/* <Posn/>
            <Nsc/>
            <Symposium/>   */}
        </div>
    </div>
  )
}

export default Myworks
