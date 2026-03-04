import type { FC } from "react"
import { Statistics } from "../../../widgets/taskStats/ui/Statistics"
import { mockTasks } from "../../home/ui/homePage"

export const StatsPage: FC = () => {
    return <Statistics tasks={mockTasks} />
}