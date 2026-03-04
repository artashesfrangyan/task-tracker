import { Box, Container } from "@mui/material"
import type { FC } from "react"
import { Header } from "../Header/Header"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
            <Header />
            <Container component="main" sx={{ flex: 1, py: 3}}>
                <Outlet />
            </Container>
        </Box>
    )
}