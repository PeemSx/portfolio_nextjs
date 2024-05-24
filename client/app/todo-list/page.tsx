import React from 'react'
import TodoList from '../components/todolist/TodoList'

const page = () => {
  return (
    <div>
        <div className='flex items-center flex-col justify-center mx-4 rounded-lg my-4'>
            <TodoList/>
        </div>
    </div>
  )
}

export default page
