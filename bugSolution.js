function foo(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle NaN values
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(0, 2)); // 2
console.log(foo(1, 0)); // 1
console.log(foo(0, 0)); // 0
console.log(foo(null, 2));//2
console.log(foo(1, null));//1
console.log(foo(null, null));//0