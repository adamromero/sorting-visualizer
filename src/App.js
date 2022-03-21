import "./App.css";
import { useState } from "react";

function App() {
   const [sliderValue, setSliderValue] = useState(0);

   return (
      <div>
         <h1>Sorting Visualizer</h1>
         <input
            type="range"
            className="slider"
            id="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
         />
         {sliderValue}

         <div style={{ display: "flex", gap: "6px", marginTop: "50px" }}>
            {Array.from({ length: sliderValue }, (_, k) => (
               <div
                  style={{
                     height: "100px",
                     width: "20px",
                     background: "green",
                  }}
                  key={k}
               ></div>
            ))}
         </div>
      </div>
   );
}

export default App;
