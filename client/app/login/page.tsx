'use client'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const page = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");


    const router = useRouter();
    const handlerSubmit = async (e) => {
        e.preventDefault();

        if(email == "" || password == ""){
            setError("Please fills email&password");
            return;
        }

        try{
            const res = await signIn('credentials',{
                email, password, redirect:false
            })

            if(res.error){
                console.log(res.error);
                setError("Please checks your email&password");
                return;
            }   
            
            router.push("/")


        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className=' flex flex-col justify-center bg-slate-600 h-[90vh] items-center mx-4 rounded-lg'>
        <div className='bg-[#2c2c2c] flex flex-col text-center w-1/3 py-4 px-4 rounded-lg'>
            <h1>Login Form</h1>
            <h1>{error}</h1>
            <form className='flex justify-center items-center flex-col space-y-4 my-4 w-full' onSubmit={handlerSubmit}>
                <TextField 
                    label='Email' 
                    InputLabelProps={{ style: { color: 'white' } }} 
                    InputProps={{ style: { color: 'white' } }}
                    style={ {width : '80%'}}

                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    type='password'
                    label='Password'
                    InputLabelProps={{ style: { color: 'white' } }}   
                    InputProps={{ style: { color: 'white' } }} 
                    style={ {width : '80%'}} 

                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='flex gap-2'>
                    <button className='bg-white rounded-lg px-4  text-black' type='submit'>Login</button>
                    <Link href={'/register'}><button className='bg-white px-4  rounded-lg text-black' type='submit'>Register</button></Link>
                </div>
                
            </form>
        </div>

    </div>
  )
}

export default page
