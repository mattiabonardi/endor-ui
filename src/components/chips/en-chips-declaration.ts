import { DataSchemaTypeArray } from "../../declarations/schema";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorChipsProps extends AbstractEndorFieldProps {
  // binding
  value: DataSchemaTypeArray | undefined;
}
