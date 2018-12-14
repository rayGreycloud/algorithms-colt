// Divide & Conquer
function binarySearch(sortedArray, targetValue) {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;
  let middle = Math.floor((leftPointer + rightPointer) / 2);

  while (sortedArray[middle] !== targetValue && leftPointer <= rightPointer) {
    // if target less than middle, move right (end) pointer
    if (targetValue < sortedArray[middle]) {
      // set end to left of middle because current middle cannot equal target
      rightPointer = middle - 1;
      // if not less, must be more so move left pointer
    } else {
      // set start to right of middle
      leftPointer = middle + 1;
    }

    middle = Math.floor((leftPointer + rightPointer) / 2);
  }

  return sortedArray[middle] === targetValue ? middle : -1;
}

let testArray = [1, 2, 3, 4, 5];
let testTarget = 5;
console.log(binarySearch(testArray, testTarget)); // 4

testTarget = 6;
console.log(binarySearch(testArray, testTarget)); // -1

testArray = [
  5,
  6,
  10,
  13,
  14,
  18,
  30,
  34,
  35,
  37,
  40,
  44,
  64,
  79,
  84,
  86,
  95,
  96,
  98,
  99,
];
testTarget = 18;
console.log(binarySearch(testArray, testTarget)); // 5

testTarget = 10;
console.log(binarySearch(testArray, testTarget)); // 2

testTarget = 95;
console.log(binarySearch(testArray, testTarget)); // 16

testTarget = 100;
console.log(binarySearch(testArray, testTarget)); // -1
