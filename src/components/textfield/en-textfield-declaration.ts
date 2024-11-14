import { StringValue } from "../../declarations/value";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorTextfieldProps extends AbstractEndorFieldProps {
  // binding
  value: StringValue;
  onChange: (value: StringValue) => void;
}
