function selectionSort(arr) {
  // swap function using ES6 syntax
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  // start at beginning of array
  for (let i = 0; i < arr.length - 1; i++) {
    let idxLowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxLowest]) {
        idxLowest = j;
      }
    }
    // Swap number positions
    if (i !== idxLowest) {
      swap(arr, i, idxLowest);
    }
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
