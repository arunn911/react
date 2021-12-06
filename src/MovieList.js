import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Msg } from './Msg';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from './globalConstants';
// import { useEffect } from 'react';

export function MovieList() {
  const history = useHistory();


  const [movies, setMovies] = useState([]);

  const getMovies = () => {

    fetch(`${API_URL}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));

  };

  useEffect(getMovies, []);




  const deleteMovie = (id) => {
    fetch(`${API_URL}/` + id, { method: "DELETE" })
      .then((data) => data.json())
      .then((data) => getMovies());

  }


  return (
    <div className="App">

      {movies.map((movie, index) => {
        //    console.log(index);
        return (


          <Msg

            key={index}
            description={movie.description}
            image={movie.image}
            name={movie.name}
            id={movie.id}


            deletemovie={
              <IconButton onClick={() => {
                deleteMovie(movie.id);
              }
              } aria-label="delete">
                <DeleteIcon color="error" />
              </IconButton>
            }
            editmovie={
              <IconButton aria-label="edit"
                onClick={() => {
                  history.push('/movies/edit/' + movie.id)
                }}
              >
                <EditIcon color="primary" />
              </IconButton>
            }


          />


        );
      })}

    </div>
  )

}