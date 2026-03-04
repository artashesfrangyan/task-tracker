export type TaskStatus = 'created' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    status: TaskStatus;
}