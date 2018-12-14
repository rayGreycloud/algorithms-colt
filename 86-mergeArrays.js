// Merge arrays function
// First part of merge sort function

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

console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));
