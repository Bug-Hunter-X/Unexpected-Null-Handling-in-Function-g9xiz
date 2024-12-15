function myFunc(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(myFunc(10, 20)); // Output: 30
console.log(myFunc(null, 20)); // Output: 0
console.log(myFunc(10, null)); // Output: 0
console.log(myFunc(null, null)); // Output: 0