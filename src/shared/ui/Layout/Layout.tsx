import { Box, Container } from "@mui/material"
import type { FC } from "react"
import { Header } from "../Header/Header"
import { Outlet } from "react-router-dom"
import { TaskCard } from "../../../entities/task/ui/TaskCard"

export const Layout: FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
            <Header />
            <TaskCard task={{ id: '2', status: 'created' }} />
            <Container component="main" sx={{ flex: 1, py: 3}}>
                <Outlet />
            </Container>
        </Box>
    )
}