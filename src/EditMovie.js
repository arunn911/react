import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
// import {  getFromStorage ,updateStoredMovies } from './storage';
import { useHistory, useParams } from 'react-router-dom';


export function EditMovie () 
{
const history = useHistory();
const {id} = useParams();
// const movie = getFromStorage('movies')[id];

const [movieName, setMovieName] = useState("");
const [moviePoster, setMoviePoster] = useState("");
const [movieDescription, setMovieDescription] = useState("");
const [movieDirector, setMovieDirector] = useState("");
const [movieStory, setMovieStory] = useState("");
const [movieCast, setMovieCast] = useState("");
const [movieYear, setMovieYear] = useState("");
// const [movieGenere, setMovieGenere] = useState(movie.genere);
const [movieTrailer, setMovieTrailer] = useState("");

const getMovie = () => 
{

  fetch("https://612a0529068adf001789ba06.mockapi.io/movies/"+ id)
  .then((data) => data.json())
  .then((mvs) => {
    setMovieName(mvs.name)
    setMoviePoster(mvs.image)
    setMovieDescription(mvs.description)
    setMovieDirector(mvs.director)
    setMovieStory(mvs.story)
    setMovieCast(mvs.cast)
    setMovieYear(mvs.year)
    setMovieTrailer(mvs.trailer)


  });

};

 useEffect(() => getMovie());

  const updateMovie = (editedMovie) => 
  {

    fetch("https://612a0529068adf001789ba06.mockapi.io/movies/"+ id,
    {
       method: "PUT",
       body:JSON.stringify(editedMovie),
       headers: {"Content-type":"application/json"},

})
   .then((data) => data.json())
   .then((data) => history.push('/movies') );


  }





        const editMovie = () => {
        const editedMovie = {
          name:movieName,
          image: moviePoster,
          description:movieDescription,
          director:movieDirector,
          story:movieStory,
          cast:movieCast,
          year:movieYear,
          // genere:movieGenere,
          trailer:movieTrailer,
        };
        // let updatedMovies = [...movies];
        // updatedMovies[id] = editedMovie;
        // setMovies(updatedMovies);
        // updateStoredMovies(updatedMovies);
        // history.push('/movies')
        updateMovie(editedMovie);
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