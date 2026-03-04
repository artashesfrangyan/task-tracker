import type { FC } from "react";
import { TaskList } from "../../../widgets/TaskList/TaskList";
import { mockTasks } from "../../../shared/mocks/tasks";

export const HomePage: FC = () => {
    return <TaskList tasks={mockTasks} />
}