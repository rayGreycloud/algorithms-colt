function capitalizeFirst(strArray) {
  // handle edge case
  if (strArray.length === 1) {
    return [strArray[0][0].toUpperCase() + strArray[0].substr(1)];
  }

  let resultsArray = capitalizeFirst(strArray.slice(0, -1));
  const string =
    strArray.slice(strArray.length - 1)[0][0].toUpperCase() +
    strArray.slice(strArray.length - 1)[0].substr(1);
  resultsArray.push(string);

  return resultsArray;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
