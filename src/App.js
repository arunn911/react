
import './App.css';

import React, { useState } from "react";
export default function App() {
  const names = [
    {
      name: "Asuran",
      image:
        "https://i.pinimg.com/originals/e3/c5/c2/e3c5c2085c381ebe0aad132b853db9bf.png"
    },

    {
      name: "Petta",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2MwZWQxY2UtNTFjNy00YWNjLWFmZDgtYjA0YzI3OTdhNTA4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg"
    },
    {
      name: "Master",
      image:
        "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Thalapathy-Vijay-s-Master-movie-second-Look-Poster-.jpg?quality=90&zoom=1&ssl=1"
    }
  ];
  return (
    <div className="App">
      {names.map((e) => (
        <Msg image={e.image} name={e.name} />
      ))}
     
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

function Msg({ name, image }) {
  return (
    <div>
      <img className="poster" src={image} height="250" />
      <Counter/>
      <h1> Hello, {name} !!!</h1>
      
    </div>
  );
}
