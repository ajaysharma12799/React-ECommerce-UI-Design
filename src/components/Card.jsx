import { AspectRatio } from '@mui/joy'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <Grid item xs={4}>
            <Card>
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
                        variant='contained'
                        fullWidth
                        color='error'
                    >
                        Remove From Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard