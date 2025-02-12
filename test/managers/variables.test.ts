import { expect, test } from "vitest";
import { evaluateVariableFromData } from "../../src/managers/variables";

test("Create variable from data", () => {
  expect(evaluateVariableFromData("$", "Hello World")).toBe("Hello World");
});
