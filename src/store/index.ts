import { configureStore } from '@reduxjs/toolkit';
import authReducer, { login, logout } from './auth';
import tasksReducer, { addOrUpdate, remove, Task, view } from "./tasks";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer
  },
});

export {
  login,
  logout,
  addOrUpdate,
  remove,
  view
};

export type { Task };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
