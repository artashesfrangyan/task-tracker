import type { RootState } from "@/app/store";
import { TaskList } from "@/widgets/TaskList/TaskList";
import type { FC } from "react";
import { useSelector } from "react-redux";

export const HomePage: FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks)

    return <TaskList tasks={tasks} />
}