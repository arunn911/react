import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API_URL } from './globalConstants';
// import { useState } from "react";
import React from "react";
// import { updateStoredMovies } from './storage';
import {useFormik} from 'formik';

import * as yup from 'yup';
import { useHistory} from 'react-router-dom';


const addMovieValidationSchema = yup.object({
    name : yup
            .string()
            .required("Movie name must be added"),

    image : yup
            .string()
            .required("Poster should not be empty"),

    description : yup
            .string()
            .min(100, "Description should atleast have 100 characters ")
            .max(200, "Description should not exceed 200 characters")
            .required("Please describe the movie shortly"),
    trailer : yup
            .string()
            .required("Please add the trailer of the movie"),

    director : yup
            .string()
            .required("Who is the director of the movie ?"),

    year : yup
            .string()
            .required("Which year the movie got released ?"),

    cast : yup
            .string()
            .required("Please add the leading roles in the film"),

    story : yup
            .string()
            .min(300, "Story should atleast have 300 characters ")
            .max(700, "Story should not exceed 500 characters")
            .required("A brief story is needed"),
            
})




  export function AddMovie () 
  {

    const history = useHistory();

    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = 
    useFormik({ 
        initialValues: {
            name:'',
            image: '',
            description:'',
            director:'',
            story:'',
            cast:'',
            year:'',
            trailer:'',
        },
        // validate : validateLoginForm,
        validationSchema: addMovieValidationSchema ,
        onSubmit : (values) => { 
                console.log("Sending to the server",values);
                createMovie(values);
    },
    });


    const createMovie = (newMovie) =>
    {
        fetch(`${API_URL}`,
         {
            method: "POST",
            body:JSON.stringify(newMovie),
            headers: {"Content-type":"application/json"},
    
    })
        .then((data) => data.json())
        .then((data) => history.push('/movies') );

    }

    // const addMovie = () => {
    //     const newMovie = {
    //       name:movieName,
    //       image: moviePoster,
    //       description:movieDescription,
    //       director:movieDirector,
    //       story:movieStory,
    //       cast:movieCast,
    //       year:movieYear,
    //       genere:movieGenere,
    //       trailer:movieTrailer,
    //     };
    //     // setMovies([...movies, newMovie]);
    //     // updateStoredMovies([...movies,newMovie]);
    //     createMovie(newMovie);
        
    //   };





    return (
        <form onSubmit={handleSubmit} className="movie-form">
        <TextField 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        id="name" 
        name="name" 
        label="Movie name" 
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
        variant="outlined" />


        <TextField
        value={values.image}
        onChange={handleChange}
        onBlur={handleBlur}
        id="image" 
        name="image" 
        label="Poster url" 
        error={errors.image && touched.image}
        helperText={errors.image && touched.image && errors.image}
        variant="outlined" />


        <TextField
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        id="description" 
        name="description" 
        label="Movie description" 
        error={errors.description && touched.description}
        helperText={errors.description && touched.description && errors.description}
        variant="outlined" />


        <TextField
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        id="trailer"
        name="trailer"
        label="Trailer url" 
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer}
        variant="outlined" />


        <TextField 
        value={values.director}
        onChange={handleChange}
        onBlur={handleBlur} 
        id="director"
        name="director"
        label="Directed by" 
        error={errors.director && touched.director}
        helperText={errors.director && touched.director && errors.director}
        variant="outlined" />


        <TextField 
        value={values.year}
        onChange={handleChange}
        onBlur={handleBlur}
        id="year"
        name="year" 
        label="Released year" 
        error={errors.year && touched.year}
        helperText={errors.year && touched.year && errors.year}
        variant="outlined" />


        <TextField 
        value={values.cast}
        onChange={handleChange}
        onBlur={handleBlur} 
        id="cast"
        name="cast" 
        label="Leadind roles" 
        error={errors.cast && touched.cast}
        helperText={errors.cast && touched.cast && errors.cast}
        variant="outlined" />


        <TextField 
        value={values.story}
        onChange={handleChange}
        onBlur={handleBlur} 
        id="story"
        name="story" 
        label="Brief story" 
        error={errors.story && touched.story}
        helperText={errors.story && touched.story && errors.story}
        variant="outlined" />

      
    <Button type="submit" variant="contained">Add Movie</Button>
    
    </form>

    )

  }



       //   backup without yup and formik


            // export function AddMovie () 
            // {

            // const history = useHistory();
            // const [movieName, setMovieName] = useState("");
            // const [moviePoster, setMoviePoster] = useState("");
            // const [movieDescription, setMovieDescription] = useState("");
            // const [movieDirector, setMovieDirector] = useState("");
            // const [movieStory, setMovieStory] = useState("");
            // const [movieCast, setMovieCast] = useState("");
            // const [movieYear, setMovieYear] = useState("");
            // const [movieGenere, setMovieGenere] = useState("");
            // const [movieTrailer, setMovieTrailer] = useState("");

            // const createMovie = (newMovie) =>
            // {
            //     fetch("https://612a0529068adf001789ba06.mockapi.io/movies",
            //     {
            //         method: "POST",
            //         body:JSON.stringify(newMovie),
            //         headers: {"Content-type":"application/json"},
            
            // })
            //     .then((data) => data.json())
            //     .then((data) => history.push('/movies') );

            // }

            // const addMovie = () => {
            //     const newMovie = {
            //         name:movieName,
            //         image: moviePoster,
            //         description:movieDescription,
            //         director:movieDirector,
            //         story:movieStory,
            //         cast:movieCast,
            //         year:movieYear,
            //         genere:movieGenere,
            //         trailer:movieTrailer,
            //     };
            //     // setMovies([...movies, newMovie]);
            //     // updateStoredMovies([...movies,newMovie]);
            //     createMovie(newMovie);
                
            //     };





            // return (
            //     <div className="movie-form">
            //     <TextField 
            //     value={movieName}
            //     onChange={(event)=> setMovieName(event.target.value)} 
            //                 id="standard-basic" label="Movie name" variant="outlined" />

            //     <TextField
            //     value={moviePoster}
            //     onChange={(event)=> setMoviePoster(event.target.value)} 
            //                     id="standard-basic" label="Poster url" variant="outlined" />

            //     <TextField
            //     value={movieDescription}
            //     onChange={(event)=> setMovieDescription(event.target.value)} 
            //             id="standard-basic" label="Movie description" variant="outlined" />

            //     <TextField
            //     value={movieTrailer}
            //     onChange={(event)=> setMovieTrailer(event.target.value)} 
            //             id="standard-basic" label="Trailer url" variant="outlined" />

            //     <TextField 
            //     value={movieDirector}
            //     onChange={(event)=> setMovieDirector(event.target.value)} 
            //             id="standard-basic" label="Directed by" variant="outlined" />

            //     <TextField 
            //     value={movieYear}
            //     onChange={(event)=> setMovieYear(event.target.value)} 
            //             id="standard-basic" label="Released year" variant="outlined" />

            //     <TextField 
            //     value={movieGenere}
            //     onChange={(event)=> setMovieGenere(event.target.value)} 
            //             id="standard-basic" label="Movie genere" variant="outlined" />

            //     <TextField 
            //     value={movieCast}
            //     onChange={(event)=> setMovieCast(event.target.value)} 
            //             id="standard-basic" label="Leadind roles" variant="outlined" />

            //     <TextField 
            //     value={movieStory}
            //     onChange={(event)=> setMovieStory(event.target.value)} 
            //             id="standard-basic" label="Brief story" variant="outlined" />


                
            // <Button variant="contained" onClick={addMovie}>Add Movie</Button>
            
            // </div>

            // )

            // }