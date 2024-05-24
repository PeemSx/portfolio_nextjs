
import React from 'react'
import { TodoItemOne } from '../../../interface'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { removeTodoItem } from '../../../redux/features/todoListSlice'

const TodoItem = ({token,props}:{token:string,props:TodoItemOne}) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(removeTodoItem({ token:token, todoItem:props }));
  }
  return (
      <div className='bg-[#6e2e80] px-4 py-2 rounded-lg my-4 flex justify-between'>
              <div>
                <h1 className='font-semibold text-lg'>{props.topic}</h1>
                <h1 className='my-1'>{props.description}</h1>
                <h2 className='text-sm'>{props.startedDate}</h2>
              </div>
              <div>     
                <button onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan}/></button>
              </div>

      </div>
  )
}

export default TodoItem
