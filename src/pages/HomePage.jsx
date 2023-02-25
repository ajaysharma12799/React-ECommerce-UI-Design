import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { GlobalContextObject } from '../context/GlobalContext'
import AspectRatio from '@mui/joy/AspectRatio';

const HomePage = () => {
    const ctxObj = useContext(GlobalContextObject);

    return (
        <Box marginY={3}>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    {
                        ctxObj.products.map(product => {
                            return (
                                <Grid item sm={6} xs={12} md={4} lg={3}>
                                    <Card key={product.id}>
                                        <AspectRatio
                                            ratio={'1'}
                                            objectFit={'contain'}
                                        >
                                            <CardMedia
                                                component={'img'}
                                                image={product.image}
                                            />
                                        </AspectRatio>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant='h6'
                                                component={'div'}
                                                sx={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: '1',
                                                    WebkitBoxOrient: 'vertical',
                                                }}
                                            >
                                                {product.title}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Rating readOnly value={product?.rating?.rate} /><Typography>({product?.rating?.count} Ratings)</Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                variant='outlined'
                                                fullWidth
                                            >
                                                Add To Cart
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default HomePage