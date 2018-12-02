function validAnagram(first, second) {
  console.log(first);
  console.log(second);

  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    // if letter doesn't exist or is 0, then not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      // reduce count for that letter
      lookup[letter] -= 1;
    }
  }

  // if we make it here, it's anagram
  return true;
}

console.log(validAnagram('anagrams', 'nagramm'));
console.log(validAnagram('banana', 'aaabnn'));
