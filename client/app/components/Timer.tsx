'use client'
import React, { useState, useEffect } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Timer = () => {

  const [workDuration, setWorkDuration] = useState(60)
  const [breakDuration, setBreakDuration] = useState(30)

  const [mode, setMode] = useState("work");
  const [maxTime,setMaxtime] = useState(workDuration);
  const [time,setTime] = useState(maxTime);
  
  const [isStart, setStart] = useState(false);

  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {

      if(isStart){

        
        setTime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            clearInterval(0);
            return time; 
          }
        });
      }

    }, 1000);

    return () => clearInterval(timer);
  }, [isStart]);



  useEffect(() => {

    if(time > 0){
      
    setMinute(Math.floor(time / 60));
    setSecond(time % 60);

    }else{
      setMinute(0);
      setSecond(0);
      if(time <= 0 ){
     
        if(mode == 'work'){
          setMode("break");
          setMaxtime(breakDuration);
          setTime(breakDuration);
          
        }else{
          setMode("work");
          setMaxtime(workDuration);
          setTime(workDuration);
        }
      }

      return
    }
  }, [time]); 

  const handleReset = () => {
    setMaxtime(workDuration);
    setMode("work");
    setTime(maxTime);
    setStart(false);

  }

  return (
    <div className='text-center flex flex-col justify-center items-center  mx-4 my-2 rounded-lg py-4'> 
      {/* <h1>{time}</h1> */}

      <div style={{ width: 200, height: 200 }} className='my-4'>
        <CircularProgressbar
          styles={{
            root: {}, 
            path: { stroke: '#68de59' }, 
            trail: { stroke: '#000000' }, 
            text: { fill: '#ffffff', fontSize: '16px' },
        
          }}
          value={time * 100 / maxTime}
          text={`${String(minute).padStart(2, '0')} : ${String(second).padStart(2, '0')}`}
        />  
      </div>
      
     <div className='flex gap-2'>
      <button  
        className='bg-gray-600 my-2 px-4 rounded-lg text-white'
        onClick={() => setStart(!isStart)}>{isStart? 'Stop' : 'Start'}
        </button>

        <button  
        className='bg-gray-600 my-2 px-4 rounded-lg text-white'
        onClick={handleReset}>
          Reset
        </button>
     </div>

    </div>
  );
};

export default Timer;
