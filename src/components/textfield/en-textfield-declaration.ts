import { StringValue } from "../../declarations/value";
import { EndorFieldProp } from "../field/en-field-declaration";

export interface EndorTextfieldProps extends EndorFieldProp {
  // binding
  value: StringValue;
  onChange: (value: StringValue) => void;
}
