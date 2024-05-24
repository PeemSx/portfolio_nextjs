import { TextField } from '@mui/material';
import React, { useState } from 'react';
import DateCalender from '../DateCalender';
import dayjs, { Dayjs } from 'dayjs';
import createTodoItem from '../../../libs/todoList/createTodoItem';
import { useSession } from "next-auth/react";
import { TodoItem, TodoItemOne } from '../../../interface';
import getUserprofile from '../../../libs/auth/getUserprofile';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { addTodoItem } from '../../../redux/features/todoListSlice';


const TodoForm = ({ handleModal }) => {
  
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
 
  if (!session || !session.user.token) return null

  const [topic, setTopic] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  const handleSubmit = async () => {
    if (!topic || !description) {
      console.error('Validation failed: Please provide both topic and description.');
      alert('Please provide both topic and description.');
      return;
    }

    const Userprofile = await getUserprofile(session.user.token);

    // console.log(Userprofile)

    const todoItem: TodoItemOne = {
      topic: topic,
      description: description,
      status: 'not complete',
      startedDate: date.toString(),
      completedDate: date.toString(),
      ownerId: Userprofile.data._id,
      _id: null,
      createdAt: null,
      __v: 0
    };
    console.log(`${topic} ${description} ${date}`);

    try {
      const response = await createTodoItem(session.user?.token, todoItem);
      // Handle the response if necessary
      dispatch(addTodoItem( response.data));
      alert('TodoItem was added')
      console.log('Todo item created:', response);
      handleModal();
     
    } catch (error) {
      // Handle the error appropriately
      console.error('Error creating todo item:', error);
    }
  
   
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='bg-[#5e3071] lg:w-1/5 flex flex-col justify-center items-center px-4 py-6 rounded-lg gap-5'>
        <h1 className='text-center'>Add Todo Item</h1>

        <TextField
          label="Topic"
          variant="outlined"
          fullWidth
          value={topic}
          onChange={handleTopicChange}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white', // Change this to your desired text color
            },
            '& .MuiInputLabel-root': {
              color: 'white', // Change this to your desired label color
            }
          }}
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white', // Change this to your desired text color
            },
            '& .MuiInputLabel-root': {
              color: 'white', // Change this to your desired label color
            }
          }}
        />
        <DateCalender onChange={handleDateChange} value={date} />
        <div className='flex gap-2'>
          <button className='rounded-full bg-slate-700 px-4 py-1' onClick={handleModal}>Cancel</button>
          <button className='rounded-full bg-slate-700 px-4 py-1' onClick={handleSubmit}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
