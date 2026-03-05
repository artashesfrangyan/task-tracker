import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "./types";

const initialState: Task[] = [    
    { id: '1', status: 'создано' },
    { id: '2', status: 'в процессе' },
    { id: '3', status: 'завершено' },
    { id: '4', status: 'создано'}
]

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state, action: PayloadAction<Task[]>) {
            return action.payload
        },
        addTask(state, action: PayloadAction<Task>) {
            state.push(action.payload);
        },
        updateTask(state, action: PayloadAction<Task>) {
            const index = state.findIndex(t => t.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        removeTask(state, action: PayloadAction<string>) {
            state = state.filter(t => t.id !== action.payload)
        }
    }
})

export const { setTasks, addTask, updateTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;