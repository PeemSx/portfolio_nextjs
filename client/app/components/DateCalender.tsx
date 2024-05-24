import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { now } from 'next-auth/client/_utils';

const DateCalender = ({value, onChange}) => {


    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={value}
          
          onChange={onChange}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white', // Change this to your desired text color
            },
            '& .MuiInputLabel-root': {
              color: 'white', // Change this to your desired label color
            }
          }}
          
          
        />
      </LocalizationProvider>
    );
}

export default DateCalender
