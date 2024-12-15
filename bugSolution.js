function myFunc(a, b) {
  // Explicitly check for null values and handle appropriately
  if (a === null || b === null) {
    console.warn('Null value encountered in myFunc. Returning 0.'); // Add logging for better debugging
    return 0; 
  }
  return a + b; 
}

console.log(myFunc(10, 20)); // Output: 30
console.log(myFunc(null, 20)); // Output: 0
console.log(myFunc(10, null)); // Output: 0
console.log(myFunc(null, null)); // Output: 0