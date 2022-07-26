const insertionSort = (array) => {
   const elementsArray = [...array];
   const orderOfElements = [];

   let i, j;
   for (i = 0; i < elementsArray.length; i++) {
      for (j = i + 1; j < elementsArray.length; j++) {
         orderOfElements.push([i, j, null, null]);

         if (elementsArray[i] > elementsArray[j]) {
            [elementsArray[i], elementsArray[j]] = [
               elementsArray[j],
               elementsArray[i],
            ];
            orderOfElements.push([i, j, [...elementsArray], null]);
         }
      }
      orderOfElements.push([null, null, null, i]);
   }

   return orderOfElements;
};

export default insertionSort;
