import type { RootState } from "@/app/store"
import { Statistics } from "@/widgets/taskStats/ui/Statistics"
import type { FC } from "react"
import { useSelector } from "react-redux"

export const StatsPage: FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks)

    return <Statistics tasks={tasks} />
}