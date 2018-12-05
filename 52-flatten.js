function flatten(data) {
  let resultsArray = [];

  for (let i = 0; i < data.length; i++) {
    // check if item is an array
    if (Array.isArray(data[i])) {
      // if yes, call flatten on it and concat results
      resultsArray = resultsArray.concat(flatten(data[i]));
    } else {
      // if not array, push item onto results array
      resultsArray.push(data[i]);
    }
  }

  return resultsArray;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
