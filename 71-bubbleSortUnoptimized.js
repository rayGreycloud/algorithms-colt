function bubbleSort(array) {
  // start at end of array
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap number positions
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([37, 45, 29, 8, 12, 88, 100]));
