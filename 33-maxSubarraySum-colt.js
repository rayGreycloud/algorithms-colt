// Find max sum of n consecutive values in array
// Sliding window pattern
// time complexity: O(N)

function maxSubarraySum(arr, num) {
  // handle special case
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  // get initial max sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // intitial temp sum with starting value
  tempSum = maxSum;
  // iterate thru rest of array
  for (let i = num; i < arr.length; i++) {
    // substract first value and add next
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare values and set max to larger
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
