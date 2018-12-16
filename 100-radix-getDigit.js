function getDigitLongVersion(num, place) {
  // e.g. getDigit(12345, 2)
  const divisor = Math.pow(10, place); // 2nd place = 100
  // in case num is negative
  num = Math.abs(num); // 12345

  const divided = num / divisor; // 12345/100 = 123.45

  // eliminate digits on right
  const floored = Math.floor(divided); // 123

  // eliminate digits to left
  const digit = floored % 10; // 123 % 10 = 3

  return digit;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(12345, 5)); // 0
