'use client'
import React from 'react'
import Timer from '../components/Timer'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {

  const {data : session} = useSession();
  const router = useRouter();

  if(!session){
    router.push('/login');
  }else{
    return (
      <div>
        <div className='h-[88vh] bg-slate-700 flex flex-col justify-center mx-4 rounded-lg my-4'>
          <Timer/>
        </div>
        
      </div>
    )
  }

 
}

export default page
