// Simple linear search example
// time complexity: O(N);

function linearArraySearch(array, value) {
  for (let index in array) {
    if (array[index] === value) return parseInt(index);
  }

  return -1;
}

console.log(linearArraySearch([1, 2, 4, 5, 6, 7, 9], 4)); // 2
console.log(linearArraySearch([1, 2, 4, 5, 6, 7, 9], 3)); // -1

// Colt version (note difference in typeof index btwn for...in and for-loop)
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const res = linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
console.log(res);
