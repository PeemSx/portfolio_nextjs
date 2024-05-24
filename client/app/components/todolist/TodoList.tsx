'use client'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Modal, TextField } from '@mui/material';
import TodoForm from './TodoForm';

import { useSession } from 'next-auth/react';
import getUserprofile from '../../../libs/auth/getUserprofile';
import getTodoItemsByUserId from '../../../libs/todoList/getTodoItemsByUserId';
import { TodoItemJson, TodoItemOne } from '../../../interface';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../../../redux/store';
import { setTodoList } from '../../../redux/features/todoListSlice';


const TodoList =  () => {
  const [open,setOpen] = useState<boolean | null>(false);
  // const [data, setData] = useState<TodoItemOne[] | null>(undefined);

  const dispatch = useDispatch<AppDispatch>();


  const handleModal = () => {
    setOpen(!open);
  }
  
  const {data:session} = useSession();

  useEffect(() => {
    const fetchData = async () => {
      if (session && session.user && session.user.token) {
        try {
          const userProfile = await getUserprofile(session.user.token);
          const response = await getTodoItemsByUserId(session.user.token, userProfile.data._id);
          // setData(response.data);
          // console.log(data);
          dispatch(setTodoList(response.data));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []);

  const todoItems = useAppSelector((state)=> state.todoListSlice.TodoList);

  return (
    <div className='w-3/5 '>
      <div className='bg-[#5e3071] w-full px-4 py-2 rounded-lg flex justify-between'>
        <h1 className='font-semibold'>Todo List</h1>

        <button onClick={handleModal}>
          <FontAwesomeIcon icon={faPlusCircle} className='text-2xl'></FontAwesomeIcon>
        </button>
        <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <TodoForm handleModal={handleModal}/>
      </Modal>
      </div>
      <div>
        {todoItems?
          todoItems.map((todoItem:TodoItemOne)=>(
            <TodoItem props={todoItem} token={session.user?.token}/>
            
          )): null
        }
      </div>
    </div>

  )
}

export default TodoList
