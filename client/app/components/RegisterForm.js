'use client'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import userRegister from '@/libs/auth/userRegister'


const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");


    const router = useRouter();
    const handlerSubmit = async (e) => {
        e.preventDefault();

        if(name == "" || email == "" || password == ""){
            setError("Please fills name, email and password");
            return;
        }

        try{
            const res =  await userRegister(name,email,password);

            if(res.error){
                console.log(res.error);
                setError("Please checks your name, email and password");
                return;
            }   
            
            router.push("/");
            // console.log(email + " "  password);

        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className=' flex flex-col justify-center bg-slate-600 h-[90vh] items-center mx-4 rounded-lg'>
        <div className='bg-[#2c2c2c] flex flex-col text-center w-1/3 py-4 px-4 rounded-lg'>
            <h1>Register Form</h1>
            <h1>{error}</h1>
            <form className='flex justify-center items-center flex-col space-y-4 my-4 w-full' onSubmit={handlerSubmit}>
                <TextField 
                    label='Name' 
                    InputLabelProps={{ style: { color: 'white' } }} 
                    InputProps={{ style: { color: 'white' } }}
                    style={ {width : '80%'}}

                    onChange={(e) => setName(e.target.value)}
                />
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
                <button className='bg-white w-1/4 rounded-lg text-black' type='submit'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default RegisterForm




  

