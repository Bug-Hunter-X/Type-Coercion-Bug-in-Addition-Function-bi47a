# Type Coercion Bug in JavaScript Addition Function

This repository demonstrates a subtle bug in a JavaScript function that performs addition. The bug arises from unexpected type coercion when one of the inputs is 0 (zero). 

## Bug Description
The `foo` function is designed to add two numbers. However, if either of the inputs is 0, it incorrectly treats it as `null` and returns `null`. This is due to loose comparison (`===`) and how JavaScript handles type coercion.

## Bug Solution
The solution involves using strict equality checks to explicitly handle the case where the input is 0. By using the `Number()` function, the input is explicitly converted to a number before comparison and addition which prevents the unintended behavior.

## How to reproduce
1. Clone this repository
2. Open the `bug.js` file
3. Run the file using Node.js (or your preferred JavaScript environment).
4. Observe the incorrect outputs when either or both parameters are 0.
5. Then run `bugSolution.js` and observe the fixed output.