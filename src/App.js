
import './App.css';


import React, { useEffect, useState } from "react";


import { Link, Switch, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import { MovieList } from './MovieList';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';

// import {  updateStoredMovies } from './storage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme ({
    palette:{
      mode: darkMode ? "dark": "light",
    
    },
  });
  
   
  const [movies, setMovies] = useState([]);

  const getMovies = () => 
  {

    fetch("https://612a0529068adf001789ba06.mockapi.io/movies")
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs));

  };

   useEffect(() => getMovies,[]);

  return (
    <ThemeProvider theme={theme}>x
 <Paper>
    <section>
      <div className="cover">

        </div>
      <AppBar position="sticky">
        <Toolbar className="menu-bar">
          <Link to="/">Home</Link>
        <Link to="/addMovies">Add Movies</Link>
        <Link to="/movies">Movies</Link>

        <IconButton onClick={() => setDarkMode(!darkMode)} aria-label="change-mode">
            {darkMode ? <DarkModeIcon color="action" /> :
              <LightModeIcon  color="action" />}
          </IconButton>

          {/* <Link to="about">About</Link> */}
          </Toolbar>
          </AppBar>



      <Switch>

          <Route exact path="/">
          Welcome to our page 
            </Route>

            <Route exact path="/movies/:id"> 
              <MovieDetails movies={movies} setMovies={setMovies} getMovies={getMovies}/>
            </Route>
            
            <Route path="/movies/edit/:id">
              <EditMovie movies={movies} setMovies={setMovies} />
            </Route>

            <Route path="/addMovies"> 
              <AddMovie movies={movies} setMovies={setMovies} />
            </Route>

              <Route exact path="/movies">
                <MovieList movies={movies} setMovies={setMovies} getMovies={getMovies} />
              </Route>

        </Switch>
          
   
    </section>
    </Paper>
    </ThemeProvider>
  );

 }


