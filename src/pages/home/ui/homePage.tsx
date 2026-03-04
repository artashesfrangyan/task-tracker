import { mockTasks } from "@/shared/mocks/tasks";
import { TaskList } from "@/widgets/TaskList/TaskList";
import type { FC } from "react";

export const HomePage: FC = () => {
    return <TaskList tasks={mockTasks} />
}