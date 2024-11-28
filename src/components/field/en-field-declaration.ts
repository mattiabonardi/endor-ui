import { DataSchemaElement, DataSchemaType } from "../../declarations/schema";

export interface EndorFieldProps extends AbstractEndorFieldProps {
  // binding
  value: DataSchemaType | undefined;
  onChange: (value: DataSchemaType) => void;
}

export type AbstractEndorFieldProps = {
  // schema
  schema: DataSchemaElement;
  // input id
  fieldId: string;

  // error
  error?: boolean;

  // commons events
  onFocus?: (fieldId: string) => void;
};
