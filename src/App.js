import "./App.css";
import { useState, useEffect } from "react";
import shuffle from "./utils/shuffle";
import insertionSort from "./algorithms/insertion";
import bubbleSort from "./algorithms/bubble";

const App = () => {
   const [sliderValue, setSliderValue] = useState(5);
   const [elements, setElements] = useState([]);
   const [isSorted, setIsSorted] = useState(false);
   const [algorithm, setAlgorithm] = useState("insertion");

   useEffect(() => {
      shuffleArray();
   }, [sliderValue, algorithm]);

   const shuffleArray = () => {
      const array = [];
      for (let i = 1; i <= sliderValue; i++) {
         array.push(i);
      }
      setElements(shuffle(array));
   };

   const getAlgorithm = () => {
      switch (algorithm) {
         case "insertion":
            return insertionSort(elements);
         case "bubble":
            return bubbleSort(elements);
         default:
            return insertionSort(elements);
      }
   };

   const sortArray = () => {
      const sortByOrder = (orderOfElements) => {
         (function loop(loopIndex) {
            setTimeout(() => {
               const [i, j, blocks, index] = orderOfElements[loopIndex];

               if (index !== null) {
                  console.log("index: ", index);
               }
               if (blocks) {
                  console.log("blocks: ", blocks);
                  setElements(blocks);
                  if (i !== null && j !== null) {
                     console.log("swap: ", i, j);
                  }
               }

               if (++loopIndex < orderOfElements.length) {
                  loop(loopIndex);
               } else {
                  console.log("done");
               }
            }, 10);
         })(0);
      };

      console.log(getAlgorithm());

      sortByOrder(getAlgorithm());
   };

   return (
      <div>
         <h1>Sorting Visualizer</h1>
         <button onClick={() => setAlgorithm("insertion")}>
            Insertion sort
         </button>
         <button onClick={() => setAlgorithm("merge")}>Merge sort</button>
         <button onClick={() => setAlgorithm("quick")}>Quick sort</button>
         <button onClick={() => setAlgorithm("bubble")}>Bubble sort</button>
         <button onClick={shuffleArray}>Shuffle</button>
         <div
            style={{
               display: "flex",
               gap: "6px",
               top: "80px",
               position: "relative",
            }}
         >
            {elements.map((element, index) => (
               <div
                  style={{
                     height: `${(element + 5) * 10}px`,
                     width: "15px",
                     color: "white",
                     background: "black",
                     marginLeft: `${index * 20}px`,
                     transition: "1s margin ease",
                     position: "absolute",
                  }}
                  key={index}
               >
                  {element}
               </div>
            ))}
         </div>
         <div>
            <label htmlFor="range">Size</label>
            <br />
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
         <button onClick={() => sortArray()}>Sort</button>
      </div>
   );
};

export default App;
