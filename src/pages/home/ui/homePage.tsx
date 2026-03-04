import type { FC } from "react";
import type { Task } from "../../../entities/task/model/types";
import { TaskList } from "../../../widgets/TaskList/TaskList";

const mockTasks: Task[] = [
    { id: '1', status: 'created' },
    { id: '2', status: 'in-progress' },
    { id: '3', status: 'completed' },
    { id: '4', status: 'created'}
]

export const HomePage: FC = () => {
    return <TaskList tasks={mockTasks} />
}