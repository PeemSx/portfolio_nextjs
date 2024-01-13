import React from 'react';

const Introduction = () => {
  return (
    <div className='p-12 h-screen flex items-center justify-center gap-36'>
      <div className='absolute bg-white w-20 h-60 left-80 z-0 opacity-10'></div>
      <img src='images/profile.jpg' className='h-3/4 grayscale z-10 rounded-xl' alt='Profile' />
      <div>
  
        <table className=''>
          <tbody>
            <tr className='py-4'>
              <td className='text-left px-10 py-2 font-bold opacity-40'>Name</td>
              <td className='text-left '>Supanat Kampapan</td>
            </tr>
            <tr>
              <td className='text-left px-10 py-2 font-bold opacity-40'>Age</td>
              <td className='text-left '>19</td>
            </tr>
            <tr className='py-4'>
              <td className='text-left px-10 py-2 font-bold opacity-40'>University</td>
              <td className='text-left '>Chulalongkorn</td>
            </tr>
            <tr>
              <td className='text-left px-10 py-2 font-bold opacity-40'>Skills</td>
              <td className='text-left '> Full-Stack, Database Design</td>
            </tr>
            <tr>
              <td className='text-left px-10 py-2 font-bold opacity-40'>Frontend </td>
              <td className='text-left '> Next.js (React.js), Tailwind.css</td>
            </tr>
            <tr>
              <td className='text-left px-10 py-2 font-bold opacity-40'>Backend </td>
              <td className='text-left '> Node.js, Express.js, MongoDB</td>
            </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Introduction;
