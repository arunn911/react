import React, { useState } from "react";
import { ColorBox } from './ColorBox';

export function Color() {

  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color, margin: "5px 0", color: "white", fontSize: "1.5rem" };

  const INITIAL_COLORS = ["crimson", "teal", "blue"];

  const [colors, setColors] = useState(INITIAL_COLORS);


  return (
    <div>
      <input value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <button onClick={() => setColors([...colors, color])}>Add color</button>

      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}


    </div>
  );
}
