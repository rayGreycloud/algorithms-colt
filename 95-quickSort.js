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

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case is left = right
  if (left < right) {
    // get pivot point
    let pivotIndex = pivot(arr, left, right);
    // sort left
    quickSort(arr, left, pivotIndex - 1);
    // sort right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

let arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(arr)); // [1,2,3,4,5,6,7,8]

arr = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23];
console.log(quickSort(arr)); // [-3,1,2,2,3,4,5,6,9,23,100]
