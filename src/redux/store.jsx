import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice.jsx';

export const store = configureStore({
  reducer: {
    todo: todoReducer,          
  },
});
