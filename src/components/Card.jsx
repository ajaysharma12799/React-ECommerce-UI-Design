import { AspectRatio } from '@mui/joy'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../redux/feature/cart/cartSlice';

const ProductCard = ({ product, type }) => {
    const buttonType = type === '/cart';
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            buttonType ? removeProductFromCart(product.id) : addProductToCart(product)
        );
    }

    return (
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
                {
                    !buttonType && (
                        <>
                            <Typography>
                                ${product?.price.toFixed(2)}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }} my={1}>
                                <Rating readOnly value={product?.rating?.rate} />
                                <Typography>({product?.rating?.count} Ratings)</Typography>
                            </Box>
                        </>
                    )
                }
            </CardContent>
            <CardActions>
                <Button
                    variant={buttonType ? 'contained' : 'outlined'}
                    fullWidth
                    color={buttonType ? 'error' : 'primary'}
                    onClick={handleClick}
                >
                    {buttonType ? 'Remove From Cart' : 'Add To Cart'}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard