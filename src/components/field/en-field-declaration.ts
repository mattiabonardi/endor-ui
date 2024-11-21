import { DataSchemaElement, DataSchemaType } from "../../declarations/schema";

export interface EndorFieldProps extends AbstractEndorFieldProps {
  // binding
  value: DataSchemaType | undefined;
  onChange: (value: DataSchemaType) => void;
}

export type AbstractEndorFieldProps = {
  // schema
  schema: DataSchemaElement;
};
