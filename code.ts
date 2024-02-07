export function removeConsecutiveDuplicates(
  input: Record<string, any[]>
): Record<string, any[]> {
  let output_object: Record<string, any[]> = {};
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

export function removeConsecutiveDuplicatesReduce(
  input: Record<string, any[]>
): Record<string, any[]> {
  const output_object: Record<string, any[]> = {};

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

export function removeConsecutiveDuplicatesLoop(
  input: Record<string, any[]>
): Record<string, any[]> {
  const output_object: Record<string, any[]> = {};

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

let example_input: Record<string, any[]> = {
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
