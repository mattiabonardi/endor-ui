import { DataSchema, DataSchemaType } from "./schema";

export type EndorSection = {
  components: EndorComponent[];
};

export type EndorComponent = {
  type: EndorComponentShapes;
  rawData?: DataSchemaType;
  data?: DataSchemaType;
  schema?: DataSchema;
  id?: string;
  triggers?: EndorTrigger[];
};

export enum EndorComponentShapes {
  LABEL,
}

export type EndorTrigger = {
  targets: string[];
  variables: {
    [name: string]: EndorVariable;
  };
};

export type EndorVariableMap = {
  [name: string]: EndorVariable;
};

export type EndorVariable = {
  value: string;
};
