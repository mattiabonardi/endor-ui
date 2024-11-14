import {
  ArrayValue,
  BooleanValue,
  NumberValue,
  ObjectValue,
  StringValue,
  Value,
} from "../declarations/value";

/**
 * Check that the instance of Value is string
 * @param value
 * @returns
 */
export const isString = (value: Value): value is StringValue => {
  return typeof value === "string";
};

/**
 * Check that the instance of Value is number
 * @param value
 * @returns
 */
export const isNumber = (value: Value): value is NumberValue => {
  return typeof value === "number";
};

/**
 * Check that the instance of Value is boolean
 * @param value
 * @returns
 */
export const isBoolean = (value: Value): value is BooleanValue => {
  return typeof value === "boolean";
};

/**
 * Check that the instance of Value is array
 * @param value
 * @returns
 */
export const isArray = (value: Value): value is ArrayValue => {
  return Array.isArray(value);
};

/**
 * Check that the instance of Value is array
 * @param value
 * @returns
 */
export const isObject = (value: Value): value is ObjectValue => {
  return typeof value == "object" && !isArray(value);
};
