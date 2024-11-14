import { BooleanValue } from "../../declarations/value";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorCheckboxProps extends AbstractEndorFieldProps {
  // binding
  value: BooleanValue;
  onChange: (value: BooleanValue) => void;
}
