import { DataSchemaTypeArray } from "../../declarations/schema";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorTextfieldMultipleValuesProps
  extends AbstractEndorFieldProps {
  // binding
  value: DataSchemaTypeArray | undefined;
  onChange: (value: DataSchemaTypeArray) => void;
}
