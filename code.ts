interface InputObject {
  [key: string]: any[];
}

interface OutputObject {
  [key: string]: any[];
}
/**
 * Removes consecutive duplicates from arrays in the input object using Array.filter().
 *
 * @param input An object where keys are strings and values are arrays of any type.
 * @returns An object with the same keys but with consecutive duplicates removed from the arrays.
 */
export function removeConsecutiveDuplicates(
  input: InputObject
): OutputObject {
  let output_object: OutputObject = {};
  for (const key in input) {
    const values = input[key];
    const uniqueValues = values.filter(
      (value, index, array) =>
        index === array.length - 1 || value !== array[index + 1]
    );
    output_object[key] = uniqueValues;
  }
  return output_object;
}

/**
 * Removes consecutive duplicates from arrays in the input object using Array.reduce().
 *
 * @param input An object where keys are strings and values are arrays of any type.
 * @returns An object with the same keys but with consecutive duplicates removed from the arrays.
 */
export function removeConsecutiveDuplicatesReduce(
  input: InputObject
): OutputObject {
  const output_object: OutputObject = {};

  for (const key in input) {
    const values = input[key];
    output_object[key] = values.reduce((acc, value, index) => {
      if (index === 0 || value !== values[index - 1]) {
        acc.push(value);
      }
      return acc;
    }, [] as any[]);
  }
  return output_object;
}

/**
 * Removes consecutive duplicates from arrays in the input object using simple for loop.
 *
 * @param input An object where keys are strings and values are arrays of any type.
 * @returns An object with the same keys but with consecutive duplicates removed from the arrays.
 */
export function removeConsecutiveDuplicatesLoop(
  input: InputObject
): OutputObject {
  const output_object: OutputObject = {};

  for (const key in input) {
    const values = input[key];
    const uniqueValues: any[] = [];
    for (let i = 0; i < values.length; i++) {
      if (i === 0 || values[i] !== values[i - 1]) {
        uniqueValues.push(values[i]);
      }
    }
    output_object[key] = uniqueValues;
  }
  return output_object;
}

let example_input: InputObject = {
  datapoint_1: [1.0, 2.3, 1.2, 3.4, 2.0, 2.0, 3.1, 2.3],
  datapoint_2: [true, true, true, false, true, false],
  datapoint_3: [
    "active",
    "inactive",
    "active",
    "active",
    "inactive",
    "inactive",
  ],
};
removeConsecutiveDuplicates(example_input);
removeConsecutiveDuplicatesReduce(example_input);
removeConsecutiveDuplicatesLoop(example_input);
