import React from 'react';


import { AppBar, Box, Toolbar, Grid, IconButton, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <Grid container lg={12} xs={12}>
                
                <AppBar position="static" className='menu1'>
                <Link to='home' className='text-decorator-none'>
                    <Box className='titulo1'>Mina empreendedora</Box>
                    </Link>
                    <Toolbar variant="dense" >
                        <Box display="flex" justifyContent="start">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Box>

                        <Box display="flex" justifyContent="start" className=''>
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Box>

                        <Box display="flex" justifyContent="start">
                            <Box mx={3} className='cursor ' >
                                <Typography variant="h6" color="inherit" >
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Box>
                        <Link to='sobre' className='text-decorator-none'>
                            <Box display="flex" justifyContent="start">
                                <Box mx={3} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Sobre
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='contato' className='text-decorator-none'>
                            <Box display="flex" justifyContent="start">
                                <Box mx={3} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Contato
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='login' className='text-decorator-none'>
                            <Box display="flex" justifyContent="start" >
                                <Box mx={1} className='logout' >
                                    <Typography variant="h6" color="inherit" >
                                        Logout
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Grid>

        </>
    )
}

export default Navbar;