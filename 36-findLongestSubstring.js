// Find the length of longest substring with distinct characters
// Sliding window pattern

function findLongestSubstring(str) {
  // initialize result variable
  let longest = 0;
  // object map of seen characters
  let seen = {};
  // left side pointer
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if already seen, move start to seen position if to right of current start
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('bbbbbb')); // 1
