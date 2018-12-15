// swap helper
function pivot(array, start = 0, end = array.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
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

console.log(pivot(arr)); // 4
