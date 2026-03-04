import { AppBar, Button, Container, Toolbar } from "@mui/material";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: FC = () => {
    const location = useLocation();

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Button
                        component={Link}
                        to="/"
                        color="inherit"
                        sx={{ mr: 2, fontWeight: location.pathname === '/' ? 'bold' : 'normal' }}
                    >
                        Список задач
                    </Button>
                    <Button
                        component={Link}
                        to="/stats"
                        color="inherit"
                        sx={{ fontWeight: location.pathname === '/stats' ? 'bold' : 'normal' }}
                    >
                        Статистика
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}