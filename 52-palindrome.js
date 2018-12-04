function isPalindrome(string) {
  if (string.length === 1) return true;

  if (string.length === 2) {
    return string[0] === string[1];
  }

  if (string[0] === string.slice(-1)) {
    return isPalindrome(string.slice(1, -1));
  }

  return false;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
