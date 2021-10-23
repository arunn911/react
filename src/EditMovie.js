import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import {  getFromStorage ,updateStoredMovies } from './storage';
import { useHistory, useParams } from 'react-router-dom';


export function EditMovie ({ movies, setMovies }) 
{
const history = useHistory();
const {editid} = useParams();
const movie = getFromStorage('movies')[editid];

  const [movieName, setMovieName] = useState(movie.name);
  const [moviePoster, setMoviePoster] = useState(movie.image);
  const [movieDescription, setMovieDescription] = useState(movie.description);
  const [movieDirector, setMovieDirector] = useState(movie.director);
  const [movieStory, setMovieStory] = useState(movie.story);
  const [movieCast, setMovieCast] = useState(movie.cast);
  const [movieYear, setMovieYear] = useState(movie.year);
  const [movieGenere, setMovieGenere] = useState(movie.genere);
  const [movieTrailer, setMovieTrailer] = useState(movie.trailer);

        const editMovie = () => {
        const editedMovie = {
          name:movieName,
          image: moviePoster,
          description:movieDescription,
          director:movieDirector,
          story:movieStory,
          cast:movieCast,
          year:movieYear,
          genere:movieGenere,
          trailer:movieTrailer,
        };
        let updatedMovies = [...movies];
        updatedMovies[editid] = editedMovie;
        setMovies(updatedMovies);
        updateStoredMovies(updatedMovies);
        history.push('/movies')
      };




  return (
      <div className="movie-form">
      <TextField 
      value={movieName}
      onChange={(event)=> setMovieName(event.target.value)} 
                   id="standard-basic" label="Movie name" variant="outlined" />

      <TextField
      value={moviePoster}
      onChange={(event)=> setMoviePoster(event.target.value)} 
                    id="standard-basic" label="Poster url" variant="outlined" />

      <TextField
      value={movieDescription}
      onChange={(event)=> setMovieDescription(event.target.value)} 
              id="standard-basic" label="Movie description" variant="outlined" />

      <TextField
      value={movieTrailer}
      onChange={(event)=> setMovieTrailer(event.target.value)} 
              id="standard-basic" label="Trailer url" variant="outlined" />

      <TextField 
      value={movieDirector}
      onChange={(event)=> setMovieDirector(event.target.value)} 
              id="standard-basic" label="Directed by" variant="outlined" />

      <TextField 
      value={movieYear}
      onChange={(event)=> setMovieYear(event.target.value)} 
              id="standard-basic" label="Released year" variant="outlined" />

      <TextField 
      value={movieGenere}
      onChange={(event)=> setMovieGenere(event.target.value)} 
              id="standard-basic" label="Movie genere" variant="outlined" />

      <TextField 
      value={movieCast}
      onChange={(event)=> setMovieCast(event.target.value)} 
              id="standard-basic" label="Leadind roles" variant="outlined" />

      <TextField 
      value={movieStory}
      onChange={(event)=> setMovieStory(event.target.value)} 
              id="standard-basic" label="Brief story" variant="outlined" />


    
  <Button variant="contained" onClick={editMovie} > Edit and Submit </Button>
  
  </div>

  )

}