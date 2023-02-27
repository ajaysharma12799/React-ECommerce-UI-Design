import { ShoppingCart } from '@mui/icons-material'
import { Box, Button, Drawer, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const DrawerComponent = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <React.Fragment>
            <Box>
                <Drawer
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                    anchor={'right'}
                >
                    <List>
                        <ListItem>
                            <Typography variant='h6'>
                                Home
                            </Typography>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Typography variant='h6'>
                                Products
                            </Typography>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Typography variant='h6'>
                                Signin
                            </Typography>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Button endIcon={<ShoppingCart />} variant='outlined'>
                                Cart
                            </Button>
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
        </React.Fragment>
    )
}

export default DrawerComponent