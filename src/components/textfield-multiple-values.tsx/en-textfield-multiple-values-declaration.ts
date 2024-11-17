import { StringArrayValue } from "../../declarations/value";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorTextfieldMultipleValuesProps
  extends AbstractEndorFieldProps {
  // binding
  value: StringArrayValue;
  onChange: (value: StringArrayValue) => void;
}
