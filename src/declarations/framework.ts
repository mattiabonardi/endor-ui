import { DataSchema, DataSchemaType } from "./schema";

export type EndorSection = {
  components: EndorComponent[];
};

export type EndorComponent = {
  type: EndorComponentShapes;
  data: DataSchemaType;
  schema?: DataSchema;
  id?: string;
};

export enum EndorComponentShapes {
  LABEL,
}
