
import './App.css';


import React, { useState } from "react";


import { Link, Switch, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { LoginForm } from './LoginForm';
import { EditMovie } from './EditMovie';
import { MovieList } from './MovieList';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';


// import {  updateStoredMovies } from './storage';

export default function App() {


  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",

    },

  });




  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={4}
        style={{ minHeight: "max(100%, 100vh)", borderRadius: "0" }}
      >
        <section>
          <div className="cover">

          </div>
          <AppBar className="navbar" position="sticky">
            <Toolbar className="menu-bar">
              <Link to="/">Home</Link>
              <Link to="/addMovies">Add Movies</Link>
              <Link to="/movies">Movies</Link>
              <div className="themebtn">
                <IconButton onClick={() => setDarkMode(!darkMode)} aria-label="change-mode">
                  {darkMode ? <DarkModeIcon color="action" /> :
                    <LightModeIcon color="action" />}
                  {/* <p>changetheme</p> */}
                </IconButton>
              </div>

              {/* <Link to="about">About</Link> */}
            </Toolbar>

          </AppBar>



          <Switch>

            <Route exact path="/">
              <LoginForm />
            </Route>

            <Route exact path="/movies/:id">
              <MovieDetails />
            </Route>

            <Route path="/movies/edit/:id">
              <EditMovie />
            </Route>

            <Route path="/addMovies">
              <AddMovie />
            </Route>

            <Route exact path="/movies">
              <MovieList />
            </Route>

          </Switch>


        </section>
      </Paper>
    </ThemeProvider>
  );

}


