import React from "react";
import CelciusDisplay from "./CelciusDisplay";
import FarehneitDisplay from "./FarehneitDisplay";
import { useState } from "react";


function Thermometer() {
    const [val, setVal] = useState(0);
  return (
    <div>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />

      <CelciusDisplay temp = {val}/>
      <FarehneitDisplay temp = {val}/>
    </div>
  );
}

export default Thermometer;
