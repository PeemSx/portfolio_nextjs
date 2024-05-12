
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';



const Landing =   () => {


  return (
    <div className='flex h-[92vh] p-12'>
      <div className=' flex flex-col justify-between w-5/6'>

      
        <h2 className='mt-0 mb-auto'>Next.js Static Web</h2>
        

        <h1 className='min-w-320 font-bold text-6xl lg:text-8xl'>Portfolio</h1> 
        
        <h2 className='mb-0 mt-auto'>Supanat K. | CEDT Student @Chulalongkorn University</h2>
        {
          // session? <h2>Yes </h2> : <h2> No</h2>
        }
      </div>

      <div className='w-1/6 flex flex-col items-end space-y-8'>
          <a href='mailto:p.supanat2547@gmail.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faEnvelope} className='text-2xl'></FontAwesomeIcon>
          </a>
          <a href='https://github.com/PeemSx' target='_blank' rel='noopener noreferrer' >
            <FontAwesomeIcon icon={faGithub} className='text-2xl'></FontAwesomeIcon>
          </a>
          <a href='https://www.instagram.com/onpoe._/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className='text-2xl'></FontAwesomeIcon>
          </a>
          <a href='https://www.linkedin.com/in/supanat-kampapan-8561b023a/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} className='text-2xl'></FontAwesomeIcon>
          </a>
      </div>
    
  </div>
  )
}

export default Landing
