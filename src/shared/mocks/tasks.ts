import type { Task } from "../../entities/task/model/types";

export const mockTasks: Task[] = [
    { id: '1', status: 'created' },
    { id: '2', status: 'in-progress' },
    { id: '3', status: 'completed' },
    { id: '4', status: 'created'}
]