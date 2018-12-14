function mergeArrays(arr1, arr2) {
  let results = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // Add remaining items after other array is exhausted
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(array) {
  // divide into halves until only 1 element arrays
  // return base case
  if (array.length <= 1) return array;

  // find midpoint of array
  let mid = Math.floor(array.length / 2);

  // define left side and make recursive call
  // keeps dividing until base case hit
  let left = mergeSort(array.slice(0, mid));

  // define right side and recursive call
  // keeps dividing until base case hit
  let right = mergeSort(array.slice(mid));

  // Merge results for each half and return
  return mergeArrays(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
