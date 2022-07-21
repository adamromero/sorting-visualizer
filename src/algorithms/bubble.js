const bubbleSort = (array) => {
   const elementsArray = [...array];
   const orderOfElements = [];

   let i, j;
   for (i = 0; i < elementsArray.length - 1; i++) {
      for (j = 0; j < elementsArray.length - i - 1; j++) {
         orderOfElements.push([i, j, null, null]);

         if (elementsArray[j] > elementsArray[j + 1]) {
            [elementsArray[j], elementsArray[j + 1]] = [
               elementsArray[j + 1],
               elementsArray[j],
            ];
            orderOfElements.push([i, j, [...elementsArray], null]);
         }
      }
      orderOfElements.push([null, null, null, i]);
   }

   return orderOfElements;
};

export default bubbleSort;
