import "./App.css";
import { useState, useEffect } from "react";
import shuffle from "./utils/shuffle";
import insertionSort from "./algorithms/insertion";

function App() {
   const [sliderValue, setSliderValue] = useState(20);
   const [elements, setElements] = useState([]);

   useEffect(() => {
      initArray();
   }, [sliderValue]);

   const initArray = () => {
      const array = [];
      for (let i = 1; i <= sliderValue; i++) {
         array.push(i);
      }
      setElements(shuffle(array));
   };

   const sortArray = () => {
      console.log("presorted:", elements);
      const sorted = insertionSort(elements);
      console.log("sorted:", sorted);
      setElements(sorted);
   };

   return (
      <div>
         <h1>Sorting Visualizer</h1>
         <div>
            <input
               type="range"
               className="slider"
               id="range"
               min="2"
               max="50"
               value={sliderValue}
               onChange={(e) => setSliderValue(e.target.value)}
            />
            {sliderValue}
         </div>

         <button onClick={sortArray}>Sort</button>

         <div
            style={{
               display: "flex",
               alignItems: "flex-end",
               gap: "6px",
               marginTop: "50px",
            }}
         >
            {elements.map((element, index) => (
               <div
                  style={{
                     height: `${(element + 5) * 10}px`,
                     width: "20px",
                     background: "#0075ff",
                  }}
                  key={index}
               ></div>
            ))}

            {/* {shuffle(
               Array.from({ length: sliderValue }, (_, k) => (
                  <div
                     style={{
                        height: `${(k + 5) * 10}px`,
                        width: "20px",
                        background: "green",
                     }}
                     key={k}
                  ></div>
               ))
            )} */}
         </div>
      </div>
   );
}

export default App;
