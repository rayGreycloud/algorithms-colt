function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    // get number of digits
    const currentDigitCount = digitCount(nums[i]);
    // compare to maxDigits and set maxDigits to larger
    maxDigits = currentDigitCount > maxDigits ? currentDigitCount : maxDigits;

    // Colt's shorter version
    // maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

console.log(mostDigits([1234, 56, 7])); // 4
console.log(mostDigits([1, 1, 11111, 1])); // 5
console.log(mostDigits([12, 34, 56, 78])); // 2
