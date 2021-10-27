import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Msg } from './Msg';
import { useHistory} from 'react-router-dom';
// import { useEffect } from 'react';

export function MovieList ({movies, setMovies, getMovies})
{
const history = useHistory();
// const deleteMovie = (id) => 
// {
// fetch("https://612a0529068adf001789ba06.mockapi.io/movies/" + id , {method:"DELETE"})
// .then((data) => data.json())
// .then((data) => getMovies());

// }


return(
<div className="App">
     
     {movies.map((e, index) => {
       console.log(index);
       return (
       <div> 
          
       <Msg 

        key={e.id}
        description={e.description} 
        image={e.image} 
        name={e.name}
        id={e.id}


       deletemovie = {
        <IconButton  onClick={() => {
            // deleteMovie(e.id);
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
      
  
        />
       
        </div>
       );
     })}
    
   </div>
)
    
}