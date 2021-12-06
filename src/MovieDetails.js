import React from "react";
import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { API_URL } from './globalConstants';
// import { getFromStorage } from "./storage";

export function MovieDetails() {

  const { id } = useParams();
//   const movie = getFromStorage('movies')[movieid];
// //   console.log(movie.name);
    const [movie, setMovie] = useState({});

    const showMovies = () => 
        {
            fetch(`${API_URL}/` + id)
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
           
          }
    
    useEffect(showMovies, [id]);
    console.log(movie);
  const history = useHistory();

  return (
    <div className="info-container">
      <div className="trailer">
        <iframe
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen="allowfullscreen">

        </iframe>
      </div>
      <div className="movie-info">
        <h1>{movie.name}</h1>
        <p className="story">{movie.story}</p>
        <div className="creator">
          <p><span className="highlight">Director :</span> {movie.director}</p>
          <p><span className="highlight">Lead roles :</span> {movie.cast}</p>
          <p><span className="highlight">Year :</span> {movie.year}</p>
        </div>
        <Button onClick={() => history.goBack()} variant="contained" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
