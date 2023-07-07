import React from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Home = () => {
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
        <Grid container spacing={4} justifyContent="center" className='grid-container' >
            <Grid item className='grid'>
            <ThemeProvider theme={theme}>
                <Typography variant="h2" sx={{ mt: "20%", color: "#4b4bfb", fontWeight: "600", padding: "10px 20px" }} >Notes App</Typography>
                <Typography variant="h3" sx={{ color: "#7431F9", fontWeight: "bold", padding: "10px 20px" }} >Manage Your Notes
                    <Typography display={'inline'} variant="h3" sx={{ color: "#1f51ff", fontWeight: "bold", padding: "10px 20px" }}>Beautifully !!!</Typography></Typography>
                <Typography variant="h5" sx={{ color: "#0002A1", fontWeight: "bold", padding: "10px 20px" }}>View All Your Notes at a Single Place
                    <Typography display={'inline'} variant="h4" sx={{ color: "#1f51ff", fontWeight: "bold", padding: "10px 20px" }}>....</Typography></Typography>
                   
                <br />

                <Link to='/Notes'>
                    <Button variant="contained" sx={{ marginLeft: "20px", width: "350px", padding: "10xp 20px", bgcolor: "#3330E4" }} endIcon={<KeyboardArrowRightIcon />}>
                        View All Notes
                    </Button>
                </Link>
                </ThemeProvider>
            </Grid>
            <Grid item>
                <img src="https://static.vecteezy.com/system/resources/previews/014/586/822/original/3d-report-paper-clipboard-note-paper-for-checklist-notes-3d-illustration-png.png" alt="image" className='image' />
            </Grid>
        </Grid>
    )
}

export default Home
