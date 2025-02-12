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
  eventType: EndorTriggerEventType;
  targets: string[];
  variables: EndorVariable[];
};

export type EndorVariable = {
  key: string;
  value: string;
};

export type EndorVariableMap = {
  [variableName: string]: DataSchemaType;
};

export enum EndorTriggerEventType {
  CLICK,
}

export type EndorTriggerEvent = CustomEvent<{
  variables: EndorVariableMap;
}>;
