function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    // if same letter, move str1 pointer to next letter
    if (str2[j] === str1[i]) {
      i++;
    }

    // end of str1?
    if (i === str1.length) {
      return true;
    }

    // move to next letter in str2
    j++;
  }
  // finished str2 with no match
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
