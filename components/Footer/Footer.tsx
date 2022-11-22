import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react'

// internal import
import Style from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 3, sm: 10 }}
                bgcolor="primary.main" >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item>
                            <Box>
                                Footer
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Footer