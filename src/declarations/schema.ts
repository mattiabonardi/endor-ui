export type DataSchema = DataSchemaElement;

export type DataSchemaElement = {
  type: DataSchemaTypeName;
  /**
   * Properties of schema
   */
  properties?: {
    [name: string]: DataSchemaElement;
  };
  /**
   * Array items
   */
  items?: DataSchemaElement;
};

export type DataSchemaTypeName =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array";

export type DataSchemaType =
  | string
  | number
  | boolean
  | DataSchemaTypeObject
  | DataSchemaTypeArray;

export type DataSchemaTypeObject = {
  [key: string]: DataSchemaType;
};

export type DataSchemaTypeArray = Array<DataSchemaType>;

export enum FieldShapes {
  TEXTFIELD,
  TEXTFIELD_MULTIPLE_VALUES,
  CHECKBOX,
  OBJECT,
}
