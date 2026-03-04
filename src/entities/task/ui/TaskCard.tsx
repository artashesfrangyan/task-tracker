import type { Task } from "../model/types"
import type { FC } from "react"
import { Box, Card, CardContent, Chip, Typography } from "@mui/material"

const statusColors: Record<string, 'default' | 'warning' | 'success'> = {
    'создано': 'default',
    'в процессе': 'warning',
    'завершено': 'success'
}

interface TaskCardProps {
    task: Task;
}

export const TaskCard: FC<TaskCardProps> = ({ task }) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant="body1">
                        <strong>ID:</strong> {task.id}
                    </Typography>
                    <Chip
                        label={task.status}
                        color={statusColors[task.status]}
                        size="small"
                        sx={{ textTransform: 'capitalize' }}
                    />
                </Box>
            </CardContent>
        </Card>
    )
}
