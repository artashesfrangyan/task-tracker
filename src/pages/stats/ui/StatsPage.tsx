import { mockTasks } from "@/shared/mocks/tasks"
import { Statistics } from "@/widgets/taskStats/ui/Statistics"
import type { FC } from "react"

export const StatsPage: FC = () => {
    return <Statistics tasks={mockTasks} />
}