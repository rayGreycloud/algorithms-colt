function pivot(array, start = 0, end = array.length + 1) {
  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i < array.length - 1; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  // move start to pivot point
  swap(array, start, swapIdx);

  return swapIdx;
}

let arr = [5, 2, 1, 8, 4, 7, 6, 3];

console.log(pivot(arr)); // 3
