import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { TaskCard } from "@/entities/task/ui/TaskCard";
import type { Task } from "@/entities/task/model/types";

interface TaskListProps {
    tasks: Task[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Список задач
            </Typography>
            <Stack spacing={2}>
                {tasks.length === 0 ? (
                    <Typography variant="body1" color="text.secondary" align="center">
                        Нет задач
                    </Typography>
                ) : (
                    tasks.map(task => <TaskCard key={task.id} task={task} />)
                )}
            </Stack>
        </Box>
    )
}
