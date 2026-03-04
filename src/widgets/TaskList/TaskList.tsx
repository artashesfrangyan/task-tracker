import type { FC } from "react";
import type { Task } from "../../entities/task/model/types";
import { Box, Stack, Typography } from "@mui/material";
import { TaskCard } from "../../entities/task/ui/TaskCard";

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
