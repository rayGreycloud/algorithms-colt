function digitCount(num) {
  // handle special case
  if (num === 0) return 1;

  num = Math.abs(num); // in case num is neg

  // get base 10 log of num
  const log = Math.log10(num);

  // round down and add 1
  const count = Math.floor(log) + 1;

  return count;
}

function digitCountShortVersion(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(1)); // 1
console.log(digitCount(32)); // 2
console.log(digitCount(640)); // 3
console.log(digitCount(-1012)); // 4
