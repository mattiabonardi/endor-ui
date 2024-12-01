export type DataSchema = DataSchemaElement;

export type DataSchemaElement = {
  type: DataSchemaTypeName;
  /**
   * Reference entity
   */
  referenceEntity?: string;
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
  /**
   * Required fields
   */
  required?: string[];
  /**
   * UI schema
   */
  uiProperties?: {
    editable?: boolean;
  };
};

export type DataSchemaTypeName =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array";

export type DataSchemaType =
  | undefined
  | string
  | number
  | boolean
  | DataSchemaTypeObject
  | DataSchemaTypeArray;

export interface DataSchemaTypeObject {
  [key: string]: DataSchemaType;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DataSchemaTypeArray extends Array<DataSchemaType> {}
