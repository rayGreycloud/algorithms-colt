function selectionSort(array) {
  // start at beginning of array
  for (let i = 0; i < array.length - 1; i++) {
    let indexLowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexLowest]) {
        indexLowest = j;
      }
    }
    // Swap number positions
    let temp = array[i];
    array[i] = array[indexLowest];
    array[indexLowest] = temp;
  }
  return array;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
