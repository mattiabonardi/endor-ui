import { expect, test } from "vitest";
import {
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
} from "../../src/utils/schema-utils";

test("is string test", () => {
  expect(isString("Hello World")).toBe(true);
  expect(isString(true)).toBe(false);
});

test("is number test", () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(1.1)).toBe(true);
  expect(isNumber(-1.1)).toBe(true);
  expect(isNumber("1")).toBe(false);
});

test("is boolean test", () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean("1")).toBe(false);
  expect(isBoolean(1)).toBe(false);
});

test("is object test", () => {
  expect(
    isObject({
      a: "b",
    })
  ).toBe(true);
  expect(isObject(1)).toBe(false);
  expect(isObject([1])).toBe(false);
});

test("is array test", () => {
  expect(isArray(["a", "b", "c"])).toBe(true);
  expect(isArray([1, 2, 3])).toBe(true);
  expect(isArray([true, false, true])).toBe(true);
  expect(
    isArray([
      {
        a: "b",
      },
      {
        b: "c",
      },
      {
        c: "d",
      },
    ])
  ).toBe(true);
  expect(isArray("Hello World")).toBe(false);
});
