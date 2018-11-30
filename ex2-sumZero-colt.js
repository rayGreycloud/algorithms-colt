// SumZero problem
// Multiple Pointer Pattern
// Time complexity: O(N)
// Space complexity: O(1)

function sumZero(arr) {
  // initialize pointers
  let left = 0;
  let right = arr.length - 1;

  // move to middle from both ends of array
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      // return pair
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // move right pointer
      right--;
    } else {
      // move left pointer
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // expect: [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // expect: undefined
