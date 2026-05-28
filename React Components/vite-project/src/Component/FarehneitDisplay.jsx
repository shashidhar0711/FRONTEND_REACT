import React from "react";
import { useState } from "react";

function FarehneitDisplay({ temp }) {
  const [val, setVal] = useState(0);
   const fahrenheit = (temp * 9) / 5 + 32;
  return (
    <div>
      {/* <input type="text" value={val} onChange={(e) => setVal(e.target.value)} /> */}
      <h3>Farehneit Display:</h3>
      <p>{fahrenheit}:F</p>
    </div>
  );
}

export default FarehneitDisplay;
