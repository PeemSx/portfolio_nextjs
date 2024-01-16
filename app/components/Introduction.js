import React from 'react';

const Introduction = () => {
  return (
    <div className='min-h-svh sm:max-md:gap-24 sm:items-center sm:justify-center  sm:max-xl:flex  sm:max-xl:flex-col w-full lg:gap-36 lg:flex xl:flex-row'>
      <div className='sm:opacity-0 absolute bg-white w-20 h-60 left-80 z-0 opacity-10'></div>
      <img src='images/profile.jpg' className='sm:max-md:w-1/2 rounded-xl grayscale lg:z-10 lg:w-1/5' alt='Profile' />
      <div className=' py-4 px-2 lg:py-0 lg:px-0'>
  
        <table className='text-left sm:max-lg:text-sm lg:max-xl:text-2xl'>
          <tbody>
            <tr className='py-4'>
              <td className='px-10 py-2 font-bold opacity-40'>Name</td>
              <td className=''>Supanat Kampapan</td>
            </tr>
            <tr>
              <td className='px-10 py-2 font-bold opacity-40'>Age</td>
              <td className=''>19</td>
            </tr>
            <tr className='py-4'>
              <td className='px-10 py-2 font-bold opacity-40'>University</td>
              <td className=''>Chulalongkorn</td>
            </tr>
            <tr>
              <td className='px-10 py-2 font-bold opacity-40'>Skills</td>
              <td className=''> Full-Stack, Database Design</td>
            </tr>
            <tr>
              <td className='px-10 py-2 font-bold opacity-40'>Frontend </td>
              <td className=''> Next.js (React.js), Tailwind.css</td>
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
