import { useState, useEffect } from "react";
import Button from "./Button";
import shuffle from "./utils/shuffle";
import insertionSort from "./algorithms/insertion";
import bubbleSort from "./algorithms/bubble";
import "./App.css";

const App = () => {
   const [elementAmount, setElementAmount] = useState(25);
   const [speed, setSpeed] = useState(10);
   const [elements, setElements] = useState([]);
   const [isSorted, setIsSorted] = useState(false);
   const [algorithm, setAlgorithm] = useState("insertion");
   const [tab, setTab] = useState();

   useEffect(() => {
      shuffleArray();
   }, [elementAmount, algorithm]);

   const shuffleArray = () => {
      const array = [];
      for (let i = 1; i <= elementAmount; i++) {
         array.push(i);
      }
      setElements(shuffle(array));
   };

   const getAlgorithm = (e) => {
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
            }, speed);
         })(0);
      };

      console.log(getAlgorithm());

      sortByOrder(getAlgorithm());
   };

   return (
      <div className="text-white">
         <div className="flex justify-between items-center py-3 mb-6 bg-black">
            <div className="flex justify-between items-center container mx-auto max-w-5xl">
               <h1 className="text-3xl font-bold my-4">Sorting Visualizer</h1>
               <div className="flex justify-between max-w-[445px] w-full items-center">
                  <div>
                     <label htmlFor="range">Size: {elementAmount}</label>
                     <br />
                     <input
                        type="range"
                        className="slider"
                        id="range"
                        min="2"
                        max="50"
                        value={elementAmount}
                        onChange={(e) => setElementAmount(e.target.value)}
                     />
                  </div>
                  <div>
                     <label htmlFor="range">Speed: {speed}</label>
                     <br />
                     <input
                        type="range"
                        className="slider"
                        id="range"
                        min="0"
                        max="15"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                     />
                  </div>
                  <Button title="Sort" handleClick={sortArray} />
                  <Button title="Shuffle" handleClick={shuffleArray} />
               </div>
               <div className="">
                  <select
                     name="algorithms"
                     id=""
                     className="bg-slate-300 text-black px-3 py-1"
                     onChange={(e) => {
                        setAlgorithm(e.target.value);
                        getAlgorithm();
                     }}
                  >
                     <option value="insertion">Insertion sort</option>
                     <option value="bubble">Bubble sort</option>
                  </select>
               </div>
            </div>
         </div>

         <div className="container mx-auto max-w-5xl">
            <div
               style={{
                  display: "flex",
                  gap: "6px",
                  position: "relative",
                  height: "565px",
               }}
            >
               {elements.map((element, index) => (
                  <div
                     style={{
                        height: `${(element + 5) * 10}px`,
                        width: "15px",
                        color: "white",
                        background: "black",
                        textAlign: "center",
                        fontSize: "10px",
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
         </div>
      </div>
   );
};

export default App;
