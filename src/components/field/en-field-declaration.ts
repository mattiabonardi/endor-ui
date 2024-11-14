import { SchemaElement } from "../../declarations/schema";
import { Value } from "../../declarations/value";

export interface EndorFieldProps extends AbstractEndorFieldProps {
  // schema
  schema: SchemaElement;
  // binding
  value: Value;
  onChange: (value: Value) => void;
}

export type AbstractEndorFieldProps = {
  // schema
  schema: SchemaElement;
};
