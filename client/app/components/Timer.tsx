'use client'
import React, { useState, useEffect } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Slider from '@mui/material/Slider';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

const Timer = () => {

  const [workDuration, setWorkDuration] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);

  // const [round, setRound] = useState(1);

  const [isSetting, setIsSetting] = useState(false)

  const [mode, setMode] = useState("work");
  const [maxTime,setMaxtime] = useState(workDuration);
  const [time,setTime] = useState(maxTime);
  
  const [isStart, setStart] = useState(false);

  const [hour, setHour] = useState(0)
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

    }, 100);
    return () => clearInterval(timer);
  }, [isStart]);

  //set time
  useEffect(() => {

    const newHour = Math.floor(time/ 3600);
    const newMinute = Math.floor((time % 3600)/60);
    const newSecond = time % 60;
    setHour(newHour)
    setMinute(newMinute); 
    setSecond(newSecond);
  
    if (time <= 0) {
      const newMode = ((mode === 'work') ? 'break' : 'work');
      const newMaxTime =( (newMode === 'work') ? workDuration : breakDuration);
      
      setMode(newMode);
      setMaxtime(newMaxTime);
      setTime(newMaxTime);
    }
  }, [time, mode, breakDuration, workDuration]);

  //reset the timer
  const handleReset = () => {
    setMode("work");
    setMaxtime(workDuration);
    setTime(workDuration);
    setStart(false);
    setIsSetting(false);
  }

  //handle value of duration when the slider was changed
  const handleWorkDurationChange = (e, newValue) => {
    setWorkDuration(newValue);
  }

  const handleBreakDurationChange = (e, newValue) => {
    setBreakDuration(newValue); 
  };


  //handle the action of cancel button 
  const handleCancel = () => {
    setIsSetting(false);
  }


  return (
    <div className='text-center flex flex-col justify-center items-center  mx-4 my-2 rounded-lg py-4'> 
      <h1 className='text-2xl font-semibold'>{mode.toUpperCase()}</h1>

      <div style={{ width: 200, height: 200 }} className='my-8'>
        <CircularProgressbar
          styles={mode == "work" ? 
            {
              root: {}, 
              path: { stroke: '#fdbaff' }, 
              trail: { stroke: '#000000' }, 
              text: { fill: '#ffffff', fontSize: '16px' },
          
            } 
            :
            {
              root: {}, 
              path: { stroke: '#68de59' }, 
              trail: { stroke: '#000000' }, 
              text: { fill: '#ffffff', fontSize: '16px' },
          
            }
        
        
        }
          value={time * 100 / maxTime}
          text={`${hour> 0 ? String(hour).padStart(2, '0') + ' : ' : ''}  ${String(minute).padStart(2, '0')} : ${String(second).padStart(2, '0')}`}
        />  
      </div>
      
     <div className='flex gap-2'>
      <button  
        className='bg-gray-600 my-2 px-4 rounded-full text-white border border-white'
        onClick={() => setStart(!isStart)}>{isStart? <StopCircleOutlinedIcon/> : <PlayCircleOutlinedIcon/>}
      </button>

      <button  
        className='bg-gray-600 my-2 px-4 rounded-full text-white border border-white'
        onClick={handleReset}>
          <RestartAltOutlinedIcon/>
      </button>

      <button  
        className='bg-gray-600 my-2 px-4 rounded-full text-white border border-white'
        onClick={() => setIsSetting(!isSetting)}>
          <SettingsApplicationsOutlinedIcon/>
      </button>
      
     </div>

      {
        isSetting ?
        <div className='w-1/3 mt-8 space-y-4 bg-[#00000022] px-4 py-2 rounded-lg'>
          <h1>Working Duration</h1>
          <Slider  
            aria-label="Working Duration"
            defaultValue={1500}
            valueLabelDisplay="auto"
            value={workDuration}
            onChange={handleWorkDurationChange}
            step={300}
           
            min={300}
            max={10800}

            valueLabelFormat={(value) => `${value / 60}`}
          />
          <h1>Breaking Duration</h1>
          <Slider
            aria-label="Breaking Duration"
            valueLabelDisplay="auto"
            defaultValue={300}

            value={breakDuration}
            onChange={handleBreakDurationChange}
            step={300}
           
            min={0}
            max={3600}
            valueLabelFormat={(value) => `${value / 60}`}
          />
          <div className='flex justify-center gap-3'>
            <button className='bg-gray-600 my-2 px-4 rounded-full text-white border border-white'
              onClick={handleReset}
            >confirm</button>
            <button className='bg-gray-600 my-2 px-4 rounded-full text-white border border-white'
              onClick={handleCancel}
            >cancel</button>
          </div>
        </div>  :
        null 
      }


    </div>
  );
};

export default Timer;
