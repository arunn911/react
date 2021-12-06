import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
// import {  getFromStorage ,updateStoredMovies } from './storage';
import { useHistory, useParams } from 'react-router-dom';
import { API_URL } from './globalConstants';
import {useFormik} from 'formik';
import * as yup from 'yup';

const addMovieValidationSchema = yup.object({
        name: yup
                .string()
                .required("Movie name must be added"),

        image: yup
                .string()
                .required("Poster should not be empty"),

        description: yup
                .string()
                .max(200, "Description should not exceed 200 characters")
                .required("Please describe the movie shortly"),
        trailer: yup
                .string()
                .required("Please add the trailer of the movie"),

        director: yup
                .string()
                .required("Who is the director of the movie ?"),

        year: yup
                .string()
                .required("Which year the movie got released ?"),

        cast: yup
                .string()
                .required("Please add the leading roles in the film"),

        story: yup
                .string()
                .max(700, "Story should not exceed 500 characters")
                .required("A brief story is needed"),

})




export function EditMovie() {
       
        const { id } = useParams();
        const [formValues, setFormValues] = useState(null);
        // const movie = getFromStorage('movies')[id];

        // const [movieName, setMovieName] = useState("");
        // const [moviePoster, setMoviePoster] = useState("");
        // const [movieDescription, setMovieDescription] = useState("");
        // const [movieDirector, setMovieDirector] = useState("");
        // const [movieStory, setMovieStory] = useState("");
        // const [movieCast, setMovieCast] = useState("");
        // const [movieYear, setMovieYear] = useState("");
        // // const [movieGenere, setMovieGenere] = useState(movie.genere);
        // const [movieTrailer, setMovieTrailer] = useState("");

        const getMovie = () => {

                fetch(`${API_URL}/` + id)
                        .then((data) => data.json())
                        .then((mv) => setFormValues(mv));

        };

        useEffect(getMovie, [id]);

return formValues ? <EditMovieForm formValues={formValues} id={id} /> : "";
}

       function EditMovieForm({formValues, id}) {
        const history = useHistory();
                const updateMovie = (editedMovie) => {
                        delete editedMovie._id;
                       fetch(`${API_URL}/edit/`+id, {
                               method:"PUT",
                               body:JSON.stringify(editedMovie),
                               headers: {"Content-type":"application/json"},
                       })
                       .then((data) => data.json())
                       .then((data) => history.push("/movies"));
                };
                // let updatedMovies = [...movies];
                // updatedMovies[id] = editedMovie;
                // setMovies(updatedMovies);
                // updateStoredMovies(updatedMovies);
                // history.push('/movies')
                const {handleSubmit, handleChange, handleBlur, values, errors, touched} = 
                useFormik({ 
                    initialValues: formValues,
                    // validate : validateLoginForm,
                    validationSchema: addMovieValidationSchema ,
                    onSubmit : (values) => { 
                            console.log("Sending to the server",values);
                            updateMovie(values);
                },
                });

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