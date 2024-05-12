'use client'
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import getUserprofile from '../../libs/auth/getUserprofile';
import { useState, useEffect } from 'react';

const TopMenu =  () => {
  const { data: session } = useSession();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userProfile = await getUserprofile(session?.user?.token);
        setProfile(userProfile);

      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (session) {
      fetchUserData();

    }
  }, [session]);

  return (
    <div className='flex justify-between px-6 py-2 mt-2'>
      <div className='flex'>
        <Link href="/">
          <h2 className='hover:text-white hover:bg-black bg-slate-300 px-2 rounded-lg text-black'>Homie</h2>
        </Link>
        {
          session? 
          <h2 className='ml-2'> Hello, {profile?.data?.name} </h2> :
          null
        }
      </div>

      <div>   
        {!session ? (
         

          <Link href="/login">
              <h2 className='hover:text-white '>Login</h2>
          </Link>
        
        ) : (
          <div className='flex gap-2'>          
          <Link href="/pomodoro">
            <h2 className='hover:text-white '>Pomodoro</h2>
          </Link>
        
          <Link href="/api/auth/signout">
            <h2 className='hover:text-red-500 hover:bg-black bg-red-500 px-2 rounded-lg text-white'>Logout</h2>
          </Link>
        
        </div>

        )}
      </div>
    </div>
  );
};

export default TopMenu;
