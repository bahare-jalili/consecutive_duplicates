import {
  removeConsecutiveDuplicates,
  removeConsecutiveDuplicatesReduce,
  removeConsecutiveDuplicatesLoop,
} from "./code";
describe("removeConsecutiveDuplicates", () => {
  it("should remove consecutive duplicates from array values", () => {
    const example_input = {
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

    const example_output = {
      datapoint_1: [1.0, 2.3, 1.2, 3.4, 2.0, 3.1, 2.3],
      datapoint_2: [true, false, true, false],
      datapoint_3: ["active", "inactive", "active", "inactive"],
    };

    expect(removeConsecutiveDuplicates(example_input)).toEqual(example_output);
  });

  it("should handle empty input", () => {
    const emptyInput = {};
    expect(removeConsecutiveDuplicates(emptyInput)).toEqual({});
  });

  it("should handle arrays with no consecutive duplicates", () => {
    const noConsecutiveDuplicatesInput = {
      datapoint_1: [1.0, 2.3, 3.1],
      datapoint_2: [true, false, true],
      datapoint_3: ["active", "inactive", "active"],
    };

    expect(removeConsecutiveDuplicates(noConsecutiveDuplicatesInput)).toEqual(
      noConsecutiveDuplicatesInput
    );
  });
});

describe("removeConsecutiveDuplicatesReduce", () => {
  it("should remove consecutive duplicates from array values", () => {
    const example_input = {
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

    const example_output = {
      datapoint_1: [1.0, 2.3, 1.2, 3.4, 2.0, 3.1, 2.3],
      datapoint_2: [true, false, true, false],
      datapoint_3: ["active", "inactive", "active", "inactive"],
    };

    expect(removeConsecutiveDuplicatesReduce(example_input)).toEqual(
      example_output
    );
  });

  it("should handle empty input", () => {
    const emptyInput = {};
    expect(removeConsecutiveDuplicatesReduce(emptyInput)).toEqual({});
  });

  it("should handle arrays with no consecutive duplicates", () => {
    const noConsecutiveDuplicatesInput = {
      datapoint_1: [1.0, 2.3, 3.1],
      datapoint_2: [true, false, true],
      datapoint_3: ["active", "inactive", "active"],
    };

    expect(
      removeConsecutiveDuplicatesReduce(noConsecutiveDuplicatesInput)
    ).toEqual(noConsecutiveDuplicatesInput);
  });
});

describe("removeConsecutiveDuplicatesLoop", () => {
  it("should remove consecutive duplicates from array values", () => {
    const example_input = {
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

    const example_output = {
      datapoint_1: [1.0, 2.3, 1.2, 3.4, 2.0, 3.1, 2.3],
      datapoint_2: [true, false, true, false],
      datapoint_3: ["active", "inactive", "active", "inactive"],
    };

    expect(removeConsecutiveDuplicatesLoop(example_input)).toEqual(
      example_output
    );
  });

  it("should handle empty input", () => {
    const emptyInput = {};
    expect(removeConsecutiveDuplicatesLoop(emptyInput)).toEqual({});
  });

  it("should handle arrays with no consecutive duplicates", () => {
    const noConsecutiveDuplicatesInput = {
      datapoint_1: [1.0, 2.3, 3.1],
      datapoint_2: [true, false, true],
      datapoint_3: ["active", "inactive", "active"],
    };

    expect(
      removeConsecutiveDuplicatesLoop(noConsecutiveDuplicatesInput)
    ).toEqual(noConsecutiveDuplicatesInput);
  });
});

describe("Performance comparison", () => {
  const example_input = {
    datapoint_1: [
      1.0, 2.3, 1.2, 3.4, 2.0, 2.0, 3.1, 2.3, 1.0, 2.3, 1.2, 3.4, 2.0, 2.0, 2.0,
      2.0, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2,
    ],
    datapoint_2: [
      true,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
    ],
    datapoint_3: [
      "active",
      "inactive",
      "active",
      "active",
      "inactive",
      "inactive",
      "active",
      "active",
      "inactive",
      "inactive",
      "active",
      "active",
      "inactive",
      "inactive",
      "active",
      "active",
      "inactive",
      "inactive",
    ],
  };

  it("removeConsecutiveDuplicates vs removeConsecutiveDuplicatesReduce vs removeConsecutiveDuplicatesLoop", () => {
    const start1 = performance.now();
    removeConsecutiveDuplicates(example_input);
    const end1 = performance.now();
    console.log(
      "removeConsecutiveDuplicates:",
      (end1 - start1) * 1e3,
      "microseconds"
    );

    const start2 = performance.now();
    removeConsecutiveDuplicatesReduce(example_input);
    const end2 = performance.now();
    console.log(
      "removeConsecutiveDuplicatesReduce:",
      (end2 - start2) * 1e3,
      "microseconds"
    );

    const start3 = performance.now();
    removeConsecutiveDuplicatesLoop(example_input);
    const end3 = performance.now();
    console.log(
      "removeConsecutiveDuplicatesLoop:",
      (end3 - start3) * 1e3,
      "microseconds"
    );
  });
});
