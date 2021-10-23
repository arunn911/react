import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getFromStorage } from './App';

export function MovieDetails() {

  const { movieid } = useParams();
  const movie = getFromStorage('movies')[movieid];
//   console.log(movie.name);

  const history = useHistory();

  return (
    <div className="info-container">
      <div className="trailer">
        <iframe
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allowfullscreen="allowfullscreen">

        </iframe>
      </div>
      <div className="movie-info">
        <h1>{movie.name}</h1>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>{movie.genere[0]}</Button>
          <Button>{movie.genere[1]}</Button>
        </ButtonGroup>
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
