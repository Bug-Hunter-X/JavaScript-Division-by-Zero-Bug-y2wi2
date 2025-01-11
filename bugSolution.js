function foo(a, b) {
  if (a === 0 || b === 0) {
    throw new Error('Division by zero or zero as numerator'); // Throw error for 0
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 2)); // Throws Error
console.log(foo(10, 0)); // Throws Error