import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from './features/todoListSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
const store = configureStore({
  reducer: {
    todoListSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppSelector :  TypedUseSelectorHook<RootState> = useSelector;
export default store;

