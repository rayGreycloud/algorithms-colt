// mimic Math.pow()

function power(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(10, 10)); // 10000000000
