/**
 * Types and Fields
 * - string: textfield / combo / autocomplete / radio...
 * - number: number picker / combo / autocomplete / radio...
 * - boolean: checkbox / switch
 * - object: input panel
 * - array (simple): multiple textfield / multiple combo / multiple autocomplete
 * - array (object): editable data table
 */

export type StringValue = string;
export type NumberValue = number;
export type BooleanValue = boolean;
export type ObjectValue = { [key: string]: Value };
export type StringArrayValue = StringValue[];
export type NumberArrayValue = NumberValue[];
export type BooleanArrayValue = BooleanValue[];
export type ObjectArrayValue = ObjectValue[];
export type ArrayValue =
  | StringArrayValue
  | NumberArrayValue
  | BooleanArrayValue
  | ObjectArrayValue;

/**
 * Represent the generic value to bind the original interface
 */
export type Value =
  // string value
  | StringValue
  // number value
  | NumberValue
  // boolean value
  | BooleanValue
  // generic object
  | ObjectValue
  // string array
  | StringArrayValue
  // number array
  | NumberArrayValue
  // boolean array
  | BooleanArrayValue
  // generic object array
  | ObjectArrayValue;
