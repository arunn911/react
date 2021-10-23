import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { getFromStorage } from './App';

export function EditMovie ()
{

    const { editid } = useParams();
    const movie = getFromStorage('movies')[editid];
  //   console.log(movie.name);
  
    const history = useHistory();
    return (

        <h1>{movie.name}</h1>
    )


}