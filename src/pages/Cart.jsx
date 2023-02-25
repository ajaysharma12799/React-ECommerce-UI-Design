import { AspectRatio } from '@mui/joy'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ProductCard from '../components/Card'
import { GlobalContextObject } from '../context/GlobalContext'

const Cart = () => {
    const ctxObj = useContext(GlobalContextObject)
    return (
        <Box marginY={5}>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Grid container spacing={1}>
                            {
                                ctxObj.products.slice(0, 5).map(product => <ProductCard key={product.id} product={product} />)
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Cart