import { store } from "@/app/store";
import { addTask, removeTask, updateTask } from "@/entities/task/model/taskSlice";
import type { Task, TaskStatus } from "@/entities/task/model/types";
import { useEffect } from "react";

const statuses: TaskStatus[] = ['создано', 'в процессе', 'завершено'];

const generateId = () => Math.random().toString(36).substring(2, 9);

const createRandomTask = (): Task => ({
    id: generateId(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
});

const getRandomTaskFromState = (): Task | undefined => {
    const tasks = store.getState().tasks;
    if (tasks.length === 0) return undefined;
    return tasks[Math.floor(Math.random() * tasks.length)];
}

export const useTaskGenerator = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const rand = Math.random();
            // Create / Update / Delete на случайной основе
            if (rand < 0.33) {
                // Создание
                store.dispatch(addTask(createRandomTask()));
            } else if (rand < 0.66) {
                // Изменение
                const task = getRandomTaskFromState();
                if (task) {
                    const newStatus = statuses.find(s => s !== task.status) || statuses[0];
                    store.dispatch(updateTask({ ...task, status: newStatus }));
                }
            } else {
                // Удаление
                const task = getRandomTaskFromState();
                if (task) {
                    store.dispatch(removeTask(task.id));
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
}