import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementlike = () => setLike(like + 1);
  const incrementdislike = () => setDisLike(dislike + 1);



  return (
    <div className="opinion">
      <div className="hits">
        <IconButton aria-label="like">
          <Badge badgeContent={like} color="primary">
            <ThumbUpOffAltRoundedIcon onClick={incrementlike} color="action" />
          </Badge>
        </IconButton>
        <IconButton aria-label="dislike">
          <Badge badgeContent={dislike} color="error">
            <ThumbDownAltRoundedIcon onClick={incrementdislike} color="action" />
          </Badge>
        </IconButton>

        {/* <button onClick={incrementlike}>👍{like}</button>
            <button onClick={incrementdislike}>👎{dislike} </button> */}
      </div>
    </div>
  );
}
