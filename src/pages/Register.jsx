import { Box, Button, Container, Divider, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Register = () => {
    return (
        <Box marginY={5}>
            <Container maxWidth='sm'>
                <Box marginY={2} component={'form'} noValidate>
                    <Typography variant='h4' textAlign={'center'}>
                        Register Here
                    </Typography>
                    <Typography variant='body1' textAlign={'center'}>
                        You're Just 1 Step Away
                    </Typography>
                    <TextField
                        variant='outlined'
                        label='Username'
                        type={'text'}
                        margin='normal'
                        fullWidth
                    />
                    <TextField
                        variant='outlined'
                        label='Email'
                        type={'text'}
                        margin='normal'
                        fullWidth
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        label='Password'
                        type={'password'}
                        fullWidth
                    />
                    <Button
                        variant='contained'
                        fullWidth
                        size='large'
                        sx={{ mt: 2, mb: 2 }}
                        type='submit'
                    >
                        Register
                    </Button>
                </Box>
                <Divider />
                <Box marginY={2}>
                    <Typography variant='body2'>
                        Already Have Account{" "}
                        <Link component={RouterLink} to={'/login'}>Click here to Login?</Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Register