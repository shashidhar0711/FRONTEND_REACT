import React from "react";
import { useState } from "react";

function CelciusDisplay({ temp }) {
  const [val, setVal] = useState(0);
  return (
    <div>
      {/* <input type="text" value={val} onChange={(e) => setVal(e.target.value)} /> */}
      <h3>Celcius Display:</h3>
      <p>{temp}C</p>
    </div>
  );
}

export default CelciusDisplay;
