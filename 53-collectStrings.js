function collectStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      strings = strings.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === 'string') {
      strings = strings.concat(obj[key]);
    }
  }

  return strings;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
