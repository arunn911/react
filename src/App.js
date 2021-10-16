
import './App.css';

import React, { useState } from "react";
export default function App() {
  const INITIAL_MOVIES = [
    {
      name: "Asuran",
      image:
        "https://i.pinimg.com/originals/e3/c5/c2/e3c5c2085c381ebe0aad132b853db9bf.png",
      description: "The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. Will the farmer, a loving father and a pacifist by heart, be able to save his hot-blooded son is the rest of the story",
      },

      {
        name: "Baahubali:The Begining",
        image:
          "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg",
        description:"In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
        },

    {
      name: "Master",
      image:
        "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Thalapathy-Vijay-s-Master-movie-second-Look-Poster-.jpg?quality=90&zoom=1&ssl=1",
    description:"An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
      },
      {
        name: "Vikram Vedha",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTc0MTNjN2EtMDFjNS00NWUwLWFhMzctMDg3ZTlmZTk1ZjZmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
        description:"Vikram, a no-nonsense police officer, accompanied by Simon, his partner, is on the hunt to capture Vedha, a smuggler and a murderer. Vedha tries to change Vikram's life, which leads to a conflict.",
        },
       
          {
            name: "Baahubali:The Conclusion",
            image:
              "https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
            description:"When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
            },
            {
              name: "Petta",
              image:
                "https://m.media-amazon.com/images/M/MV5BN2MwZWQxY2UtNTFjNy00YWNjLWFmZDgtYjA0YzI3OTdhNTA4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
              description:"A hostel warden becomes the target of a dreaded politician and his gangster son, but little do they realize that it is they who should fear him.",
              },
  ];
  
  const [movies, setMovies] = useState(INITIAL_MOVIES);

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const addMovie = () => {
    const newMovie = {
      name:movieName,
      image: moviePoster,
      description:movieDescription,
    };
    setMovies([...movies, newMovie]);
  }
  return (
    <section>
       <div className="movie-form">
       <input value={movieName}
        onChange={(event)=> setMovieName(event.target.value)} 
        placeholder="Enter the movie name"/>
         <input value={moviePoster}
        onChange={(event)=> setMoviePoster(event.target.value)} 
        placeholder="Enter the movie poster url"/>
         <input value={movieDescription}
        onChange={(event)=> setMovieDescription(event.target.value)} 
        placeholder="Enter the movie description"/>
        <button onClick={addMovie}>Add Movie</button>
        </div>
    
    <div className="App">
     
      {movies.map((e, index) => {
        console.log(index);
        return (
        <div> 
         <button onClick={() => {
        const removeIdx = index;
        console.log("Deleting", index);
        setMovies(movies.filter((mv, idx) => idx != removeIdx));
      }
      }>Delete</button>
        <Msg 
        description={e.description} 
        image={e.image} 
        name={e.name}
         />
        
         </div>
        );
      })}
     
    </div>
    </section>
  );

 }


 function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementlike = () => setLike(like + 1);
  const incrementdislike = () => setDisLike(dislike + 1);

  return (
    <div className="opinion">
      <button onClick={incrementlike}>👍{like}</button>
      <button onClick={incrementdislike}>👎{dislike} </button>
    </div>
  );
}

 

// Msg is our component ;

function Msg({ name, image, description }) {
  
  const [show, setShow] = useState(false);
  const styles = {display: show ? "block" : "none"};

  return (
    <div className="card">
      <img className="poster" src={image} height="250" />
      <Counter/>
      <h1>{name}</h1>
      <div className="btn">
      <button onClick={() => setShow(!show)}>Show Description </button>
      
      </div>
      <p style={styles}> {description} </p>
      
    </div>
  );
}





// function Color (){
 
//   const [color, setColor] = useState("orange");
//   const styles = {backgroundColor: color, margin:"5px 0", color:"white", fontSize:"1.5rem"};

//   const INITIAL_COLORS = ["crimson", "teal", "blue"];

//  const [colors, setColors] = useState(INITIAL_COLORS)


//   return(
//   <div>
//   <input value={color}
//    style={styles}
//    onChange={(event)=> setColor(event.target.value)} 
//    placeholder="Enter a color"/>
//    <button onClick={() => setColors([...colors,color])}>Add color</button>

//  {colors.map((clr) => (
//    <ColorBox color={clr} />
//  ))}


//   </div>
//   )
// }

// function ColorBox({color}){
// const styles = {
//   backgroundColor: color,
//   height:"100px",
//   width:"150px",
// };
// return <div style={styles}></div>

// }






