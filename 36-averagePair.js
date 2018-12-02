// Determine if average of any pair equals given average
// Multiple pointers

function averagePair(arr, targetAvg) {
  // edge case
  if (arr.length < 2) return false;

  // initialize pointers
  let left = 0;
  let right = arr.length - 1;
  let tempSum = 0;

  // calculate target sum
  const targetSum = targetAvg * 2;

  // move to middle from both ends of array
  while (left < right) {
    tempSum = arr[left] + arr[right];

    if (tempSum === targetSum) {
      return true;
    }

    tempSum > targetSum ? right-- : left++;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
