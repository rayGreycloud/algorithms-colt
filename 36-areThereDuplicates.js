// Are there duplicates in provided integers
// Three solutions
// Frequency counter
function areThereDuplicates() {
  let collection = {};

  // iterate and create map
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  // check collection - val > 1 means duplicate
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// Multiple pointers
function betterAreThereDuplicates(...args) {
  // sort so dups will be adjacent
  args.sort((a, b) => a > b);
  // pointers
  let start = 0;
  let next = 1;
  // check adjacent values, if not equal 'slide' right
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// Using Set
function areThereDuplicates2() {
  // Verbose for clarity
  // Set only includes unique values
  // Set.size returns number of items
  const numberUniqueValues = new Set(arguments).size;
  const numberOfValues = arguments.length;

  return numberUniqueValues !== numberOfValues;

  // one-line version
  // return new Set(arguments).size !== arguments.length;
}
