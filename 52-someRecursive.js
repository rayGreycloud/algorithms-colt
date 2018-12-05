const isOdd = val => val % 2 !== 0;

function someRecursive(array, cb) {
  // check edge case
  if (array.length === 0) return false;
  // check first array item
  if (cb(array[0])) return true;
  // recursive call to check rest of array
  return someRecursive(array.slice(1), cb);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false
