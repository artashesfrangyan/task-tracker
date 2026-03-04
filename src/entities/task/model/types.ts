export type TaskStatus = 'создано' | 'в процессе' | 'завершено';

export interface Task {
    id: string;
    status: TaskStatus;
}