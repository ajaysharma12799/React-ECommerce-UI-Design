import { AppBar, Box, Button, CssBaseline, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <CssBaseline />
            <AppBar component={'nav'} position='static'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        component={'div'}
                        sx={{ flexGrow: 1, }}
                    >
                        <Link component={RouterLink} to={'/'} color={'#fff'} underline='none'>
                            RCommercy
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} component={'div'}>
                        <Link component={RouterLink} to={'/'} underline={'none'}>
                            <Button sx={{ color: '#fff' }} >
                                Home
                            </Button>
                        </Link>
                        <Link component={RouterLink} to={'/login'} underline={'none'}>
                            <Button sx={{ color: '#fff' }} >
                                Signin
                            </Button>
                        </Link>
                        <Link component={RouterLink} to={'/cart'} underline='none'>
                            <Button sx={{ color: '#fff' }} startIcon={<ShoppingCartIcon />}>
                                Cart
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar