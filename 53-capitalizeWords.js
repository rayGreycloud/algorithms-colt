function capitalizeWords(words) {
  if (words.length === 1) {
    return [words[0].toUpperCase()];
  }

  let result = capitalizeWords(words.slice(0, -1));

  result.push(words.slice(words.length - 1)[0].toUpperCase());

  return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
