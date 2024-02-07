# Coding test consecutive duplicates

## Context and Problem Statement

I wanted to write a function that takes a Record<string, any[]> as an input and returns a new Record with the same keys but in which any consecutive duplicates have been pruned from their values. In addition, to write a jest testsuite for the function. I wrote the algorithm in 3 ways to find which one is better considering performance and timing.

## Decision Drivers

- **Performance Requirements**: If the application has strict performance requirements, the performance of each technique would be a significant driver. Considerations include the size of the input data and the frequency of the operation.
- **Code Readability and Maintainability**: The readability and maintainability of the code are essential factors, especially in collaborative projects or projects with long-term maintenance requirements. Some developers may find certain techniques more intuitive or easier to understand.
- **Compatibility and Target Environment**: Compatibility with target environments and language features is crucial. Certain techniques may rely on features that are not available in all environments or require specific compiler options.

## Considered Options

- **filter method**: The Array.filter() method is arguably the most important and widely used method for iterating over an array in JavaScript. The filter method creates a new array and returns all of the items which pass the condition specified in the callback.

- **reduce method**: The reduce() method got its name from the functionality it provides, which is to iterate and “reduce” an array's values into one value.

- **simple for loop method**: A for loop is a statement that repeats the execution of a block of code when the condition has not been met and terminates the execution when the condition has been met.

## Decision Outcome

The choice among these techniques depends on the specific requirements and constraints of the project. If performance is critical and the application follows a functional programming paradigm, using the filter method may be the best choice. However, if fine-grained control or optimization is necessary, reduce might be preferred. For developers who prioritize familiarity and explicit control, a simple loop may be the most suitable option. Ultimately, it's essential to consider the trade-offs and make a decision based on the specific context of the project.

## How to run the code and tests

Make sure that you have tsc (TypeScript compiler) and Node.js installed. Follow these steps to run the code and tests:

### Running the code

1. Compile the TypeScript file:
   ```bash
   tsc ./code.ts
   ```
2. Run the compiled JavaScript file:
   ```bash
   node ./code.js
   ```

### Running the tests

1. Install the required npm packages:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npm test
   ```
