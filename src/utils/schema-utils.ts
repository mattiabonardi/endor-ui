import {
  DataSchemaType,
  DataSchemaTypeArray,
  DataSchemaTypeName,
  DataSchemaTypeObject,
} from "../declarations/schema";

/**
 * Check that the instance of DataSchemaTypeName is string
 * @param value
 * @returns
 */
export const isStringType = (type: DataSchemaTypeName): boolean => {
  return type === "string";
};

/**
 * Check that the instance of DataSchemaType is number
 * @param value
 * @returns
 */
export const isNumberType = (type: DataSchemaTypeName): boolean => {
  return type === "number";
};

/**
 * Check that the instance of DataSchemaType is boolean
 * @param value
 * @returns
 */
export const isBooleanType = (type: DataSchemaTypeName): boolean => {
  return type === "boolean";
};

/**
 * Check that the instance of DataSchemaType is array
 * @param value
 * @returns
 */
export const isArrayType = (type: DataSchemaTypeName): boolean => {
  return type == "array";
};

/**
 * Check that the instance of Value is array
 * @param value
 * @returns
 */
export const isObjectType = (type: DataSchemaTypeName): boolean => {
  return type == "object";
};

/**
 * Check that the instance of DataSchemaType is string
 * @param value
 * @returns
 */
export const isString = (value: DataSchemaType): value is string => {
  return typeof value === "string";
};

/**
 * Check that the instance of DataSchemaType is integer
 * @param value
 * @returns
 */
export const isInteger = (value: DataSchemaType): value is number => {
  return typeof value === "bigint";
};

/**
 * Check that the instance of DataSchemaType is number
 * @param value
 * @returns
 */
export const isNumber = (value: DataSchemaType): value is number => {
  return typeof value === "number";
};

/**
 * Check that the instance of DataSchemaType is boolean
 * @param value
 * @returns
 */
export const isBoolean = (value: DataSchemaType): value is boolean => {
  return typeof value === "boolean";
};

/**
 * Check that the instance of DataSchemaType is array
 * @param value
 * @returns
 */
export const isArray = (
  value: DataSchemaType
): value is DataSchemaTypeArray => {
  return Array.isArray(value);
};

/**
 * Check that the instance of Value is array
 * @param value
 * @returns
 */
export const isObject = (
  value: DataSchemaType
): value is DataSchemaTypeObject => {
  return typeof value == "object" && !isArray(value);
};
