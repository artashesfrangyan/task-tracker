import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "./types";

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state, action: PayloadAction<Task[]>) {
            state.tasks = action.payload
        },
        addTask(state, action: PayloadAction<Task>) {
            state.tasks.push(action.payload);
        },
        updateTask(state, action: PayloadAction<Task>) {
            const index = state.tasks.findIndex(t => t.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        removeTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(t => t.id !== action.payload)
        }
    }
})

export const { setTasks, addTask, updateTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;