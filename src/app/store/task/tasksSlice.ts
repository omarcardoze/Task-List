import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  task: string;
}

interface TaskState {
  value: Task[];
}

const initialState: TaskState = {
  value: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.value = state.value.concat(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
