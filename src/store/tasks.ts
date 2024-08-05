import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  readonly id?: string;
  readonly isCompleted?: boolean;
  readonly title: string;
}

interface TasksState {
  tasks: ReadonlyArray<Task>;
}


const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    view: (state, action: PayloadAction<ReadonlyArray<Task>>) => {
      return {tasks: action.payload};
    },
    addOrUpdate: (state, action: PayloadAction<Task>) => {
      const editedTask = action.payload; 
      
      return state.tasks.some((task) => task.id === editedTask.id) 
      ? {tasks: state.tasks.map((task) => task.id === editedTask.id ? editedTask : task)}
      : {tasks: [editedTask, ...state.tasks]};
    },
    remove: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      return {tasks: state.tasks.filter((task) => task.id !== payload)};
    }
  },
});

export const { addOrUpdate, remove, view } = tasksSlice.actions;
export default tasksSlice.reducer;
