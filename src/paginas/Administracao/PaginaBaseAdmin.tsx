import { AppBar, Box, Button, Container, Paper, Link, Toolbar, Typography } from "@mui/material"
import { Link as RouterLink, Outlet } from "react-router-dom"

const PaginaBaseAdmin = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6">
                            Administração
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <RouterLink to={"/admin/restaurantes"}>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Restaurantes
                                </Button>
                            </RouterLink>
                            <RouterLink to={"/admin/restaurantes/novo"}>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Restaurantes
                                </Button>
                            </RouterLink>
                            <RouterLink to={"/admin/pratos"}>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Pratos
                                </Button>
                            </RouterLink>
                            <RouterLink to={"/admin/pratos/novo"}>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Prato
                                </Button>
                            </RouterLink>
                        </Box>

                    </Toolbar>

                </Container>
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default PaginaBaseAdmin