import { Box, CircularProgress as Progress, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchProducts } from '../redux/feature/home/homeSlice';
import ProductCard from '../components/Card';

const HomePage = () => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector(state => state.home);

    useEffect(() => {
        dispatch(asyncFetchProducts());
    }, [dispatch])

    return (
        <Box marginY={3}>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    {
                        loading ? (<Box my={1} mx={"auto"}>
                            <Progress />
                        </Box>) : (
                            products.map(product => {
                                return (
                                    <Grid item sm={6} xs={12} md={4} lg={3} key={product.id}>
                                        <ProductCard product={product} type={'/home'} />
                                    </Grid>
                                )
                            })
                            )
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default HomePage