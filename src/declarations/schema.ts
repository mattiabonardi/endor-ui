export type EndorModelSchema = {
  elements: {
    [key: string]: SchemaElement;
  };
};

export type SchemaElement = {
  type: SchemaValueType;
  shape: FieldShapes;
  attributes?: {
    [key: string]: SchemaElement;
  };
};

export type SchemaValueType =
  | "String"
  | "Number"
  | "Boolean"
  | "Object"
  | "StringArray"
  | "NumberArray"
  | "BooleanArray"
  | "ObjectArray";

export enum FieldShapes {
  TEXTFIELD,
  CHECKBOX,
  OBJECT
}
