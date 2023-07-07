import { Grid, Icon, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Footer = () => {
    const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
    return (
        <div className='footer'>
            <ThemeProvider theme={theme}>
            <Typography variant="h6" sx={{ fontWeight: "600", color: "#1f51ff" }}>Notes<Typography display={'inline'} sx={{ fontWeight: "600", color: "black" }}> App</Typography></Typography>
            <Grid container spacing={2} className='icons' justifyContent='center'>
                <Grid item>
                    <FacebookIcon />
                </Grid>
                <Grid item>
                    <TwitterIcon />
                </Grid>
                <Grid item>
                    <FacebookIcon />
                </Grid>
                <Grid item>
                    <InstagramIcon />
                </Grid>
                <Grid item>
                    <LinkedInIcon />
                </Grid>
            </Grid>
            <Typography sx={{ fontWeight: "600", color: "#1f51ff" }}><CopyrightIcon /> 2023 Notes App.<Typography display={'inline'} sx={{ fontWeight: "600", color: "black" }}> All Rights Reserved</Typography></Typography>
     
            </ThemeProvider>
               </div>
    )
}

export default Footer
