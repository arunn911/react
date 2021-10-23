
import './App.css';


import React, { useState } from "react";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link, Switch, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import { Msg } from './Msg';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { getFromStorage, updateStoredMovies } from './storage';




export default function App() {
  
  const history = useHistory();
  const [movies, setMovies] = useState(getFromStorage("movies"));
  return (
    <section>
      <div className="cover">

        </div>
      <AppBar position="sticky">
        <Toolbar className="menu-bar">
          <Link to="/">Home</Link>
        <Link to="/addMovies">Add Movies</Link>
        <Link to="/movies">Movies</Link>
          {/* <Link to="about">About</Link> */}
          </Toolbar>
          </AppBar>



<Switch>

    <Route exact path="/">
    Welcome to our page
      </Route>

      <Route exact path="/movies/:movieid"> 
      <MovieDetails/>
      </Route>
      
      <Route path="/movies/edit/:editid">
    <EditMovie movies={movies} setMovies={setMovies} />
        </Route>

    <Route path="/addMovies"> 
   <AddMovie movies={movies} setMovies={setMovies} />
    </Route>
    
    <Route path="/movies">
    <div className="App">
     
     {movies.map((e, index) => {
       console.log(index);
       return (
       <div> 
          
       <Msg 
       delmovie={
         <IconButton  onClick={() => {
           const removeIdx = index;
           console.log("Deleting", index);
           setMovies(movies.filter((mv, idx) => idx != removeIdx));
           updateStoredMovies
           (movies.filter((mv, idx) => idx != removeIdx))
         }
         } aria-label="delete">
     <DeleteIcon color="error" />
   </IconButton>
       }
       editmovie ={
        <IconButton aria-label="edit"
        onClick={ () => {
          history.push('/movies/edit/' + index) }}
         >
           <EditIcon color="primary" />
         </IconButton>
       }
       key={index}
       description={e.description} 
       image={e.image} 
       name={e.name}
       id={index}
  
        />
       
        </div>
       );
     })}
    
   </div>
    </Route>

  </Switch>
    
   
    </section>
  );

 }


