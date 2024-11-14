export type EndorModelSchema = {
  elements: {
    [key: string]: SchemaElement;
  };
};

export type SchemaElement = {
  type: SchemaValueType;
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
