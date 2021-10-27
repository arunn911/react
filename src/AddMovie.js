import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
// import { updateStoredMovies } from './storage';
import { useHistory} from 'react-router-dom';



  export function AddMovie ({ movies, setMovies }) 
  {

    const history = useHistory();
    const [movieName, setMovieName] = useState("");
    const [moviePoster, setMoviePoster] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [movieDirector, setMovieDirector] = useState("");
    const [movieStory, setMovieStory] = useState("");
    const [movieCast, setMovieCast] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [movieGenere, setMovieGenere] = useState("");
    const [movieTrailer, setMovieTrailer] = useState("");

    const createMovie = (newMovie) =>
    {
        fetch("https://612a0529068adf001789ba06.mockapi.io/movies", {
            method: "POST",
            body:JSON.stringify(newMovie),
            headers: { "Content-type": "application/json" },
    
    })
        .then((data) => data.json())
        .then((mvs) => setMovies(mvs));

    }

    const addMovie = () => {
        const newMovie = {
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
        // setMovies([...movies, newMovie]);
        // updateStoredMovies([...movies,newMovie]);
        createMovie(newMovie);
        history.push('/movies');
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


      
    <Button variant="contained" onClick={addMovie}>Add Movie</Button>
    
    </div>

    )

  }