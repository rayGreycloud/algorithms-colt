// Find minimal length of subarray with sum >= target value
// Multiple Pointer Pattern
// Time complexity: O(N)
// Space complexity: O(1)

function minSubarrayLength(arr, targetValue) {
  let windowTotal = 0;
  let left = 0;
  let right = 0;
  let minLength = Infinity;

  // move to middle from both ends of array
  while (left < arr.length) {
    console.log(`minLength inside while = ${minLength}`);
    // if window sum < target, move window to right
    if (windowTotal < targetValue && right < arr.length) {
      windowTotal += arr[right];
      right++;
    }
    // set minimal length and shrink window
    else if (windowTotal >= targetValue) {
      console.log(`minLength inside elseif = ${minLength}`);
      minLength = Math.min(minLength, right - left);
      windowTotal -= arr[left];
      left++;
    }
    // sum < target and at end of array
    else {
      break;
    }
  }
  console.log(`minLength before return = ${minLength}`);
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubarrayLength([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubarrayLength([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubarrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
