import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';


import { Counter } from "./Counter";

// Msg is our component ;
export function Msg({ editmovie, deletemovie, id, name, image, description }) {

  const [show, setShow] = useState(false);
  //   const styles = { display: show ? "block" : "none" };

  const history = useHistory();


  return (
    <div className="card" key={id}>
      <div className="imagebox">
        <img alt="img" className="poster" src={image} height="250" /> </div>
      <Counter />
      <div className="titlebar">
        <h1>{name}

          <IconButton onClick={() => setShow(!show)} aria-label="show des">
            {show ? <ArrowDropUpIcon color="primary" /> :
              <ArrowDropDownIcon color="primary" />}
          </IconButton>

        </h1>

      </div>
      {show ? <p>{description}</p> : ""}
      {/* <p style={styles}> {description} </p> */}
      <div className="icon-bar">


        <IconButton aria-label="info"
          onClick={() => history.push("/movies/" + id)}
        >
          <InfoIcon color="primary" />
        </IconButton>

        {editmovie}

        {/* <IconButton aria-label="edit"
       onClick={ () => history.push('/movies/edit/' + id) }
        >
          <EditIcon color="primary" />
        </IconButton> */}


        {deletemovie}

      </div>


    </div>
  );
}
