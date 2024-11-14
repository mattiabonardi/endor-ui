import { BooleanValue } from "../../declarations/value";
import { EndorFieldProp } from "../field/en-field-declaration";

export interface EndorCheckboxProps extends EndorFieldProp {
  // binding
  value: BooleanValue;
  onChange: (value: BooleanValue) => void;
}
