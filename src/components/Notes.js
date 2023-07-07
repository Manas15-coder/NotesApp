import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import { Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import CircularColor from './CircularColor';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Notes = () => {
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
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false)
        }, 2000)
    },)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    'https://api.gyanibooks.com/library/get_dummy_notes'
                );
                setNotes(res.data);
                console.log(res.data);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Link to='/'><Button variant="contained" sx={{ marginTop: "20px", marginLeft: "20px", width: "350px", padding: "10xp 20px", bgcolor: "#3330E4" }} startIcon={<ChevronLeftIcon />}>
                Home
            </Button></Link>

            {loading ? <CircularColor /> : (
                <Grid container spacing={4} justifyContent="center">


                    {notes.map((note) => (
                        <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
                            <ThemeProvider theme={theme}>
                            <Paper elevation={12} sx={{ mt: '20%', bgcolor: 'transparent', padding: '20px', width:'300',height: '100%' }} className='paper'>
                                <span> <Typography variant="h6" color="green">ID: {note.id}</Typography>
                                    <Typography variant="h5" sx={{ color: "#1f51ff", fontWeight: "600" }}>Title: {note.title}</Typography></span>
                                <Typography sx={{ color: "#4b4bfb" }}>Category: {note.category}</Typography>
                                <Typography sx={{ color: "#4b4bfb", fontWeight: "600" }}>{note.content}</Typography>
                            </Paper>
                            </ThemeProvider>
                           
                        </Grid>
                    ))}
                </Grid>
            )}

        </>

    );
};

export default Notes;
