import type { Task } from "@/entities/task/model/types";
import { Divider, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useMemo } from "react";

interface StatisticsProps {
    tasks: Task[];
}

export const Statistics: React.FC<StatisticsProps> = ({ tasks }) => {
    const stats = useMemo(() => {
        const total = tasks.length;
        const statusCounts = tasks.reduce<Record<string, number>>((acc, task) => {
            acc[task.status] = (acc[task.status] || 0) + 1;
            return acc;
        }, {});
        return { total, statusCounts };
    }, [tasks]);

    return (
        <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
            <Typography variant="h5" component="h2" gutterBottom align="center">
                Статистика задач
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Всего задач: <strong>{stats.total}</strong>
            </Typography>
            <Divider sx={{ my: 2 }} />
            <List>
                {Object.entries(stats.statusCounts).map(([status, count]) => (
                    <ListItem key={status} disablePadding sx={{ py: 0.5 }}>
                        <ListItemText
                            primary={status}
                        />
                        <Typography variant="body2" color="text.secondary">
                            {count}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}
