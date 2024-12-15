# JavaScript Null Handling Bug

This repository demonstrates a subtle bug related to null handling in JavaScript functions.  The function `myFunc` adds two numbers. However, it silently returns 0 if either input is null. While this might be the intended behavior, it's not immediately apparent from the code itself.

The `bug.js` file contains the buggy code, and `bugSolution.js` demonstrates a solution that makes the handling of null more explicit and clear.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and observe the function.
3. Run the JavaScript code.
4. Examine the output to understand the behavior with null inputs.  Then, compare the output to the explicit solution.

## Solution

The solution improves readability and maintainability by explicitly handling null values and providing better documentation. The improved version makes it clear what the code will do when confronted with null values, reducing the possibility of future errors or unexpected behavior.