// Radix sort
// time complexity: O(nk) n-length k-ave number digits
// generally faster than comparision sotring methods

// Helper functions
// returns number of digits in number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// returns digit in given place
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// returns greatest number of digits found in array of numbers
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

// Main function
function radixSort(list) {
  // maxDigitCount = number passes required for sort
  const maxDigitCount = mostDigits(list);
  // sort pass loop
  for (let k = 0; k < maxDigitCount; k++) {
    // create digit buckets
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // iterate over numbers
    for (let i = 0; i < list.length; i++) {
      // get digit at kth place from number
      let digit = getDigit(list[i], k);
      // push number into that digit's bucket
      digitBuckets[digit].push(list[i]);
    }
    // Rejoin buckets into new array
    list = [].concat(...digitBuckets);
  }
  // after maxDigitCount passes, list is sorted
  return list;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9842]));
