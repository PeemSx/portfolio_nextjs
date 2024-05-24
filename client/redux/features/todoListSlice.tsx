import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoItemOne } from '../../interface'

import createTodoItem from '../../libs/todoList/createTodoItem'
import deleteTodoItem from '../../libs/todoList/deleteTodoItem'

type TodoState = {
  TodoList : TodoItemOne[]
}

const initialState:TodoState = { TodoList: []}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList:( state, action:PayloadAction<TodoItemOne[]>) =>{
      state.TodoList = action.payload;
    },
    addTodoItem:( state, action:PayloadAction<TodoItemOne>) =>{
      state.TodoList.push(action.payload);
    },
    removeTodoItem : ( state, action:PayloadAction<{token:string, todoItem:TodoItemOne}>) =>{
      const remainItems = state.TodoList.filter((obj) => {
        return ((obj._id) !== action.payload.todoItem._id);
      })
      deleteTodoItem(action.payload.token, action.payload.todoItem._id);
      state.TodoList = remainItems;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setTodoList, addTodoItem, removeTodoItem } = todoListSlice.actions

export default todoListSlice.reducer