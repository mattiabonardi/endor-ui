import { ObjectValue } from "../../declarations/value";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorFormProps extends AbstractEndorFieldProps {
  // binding
  value: ObjectValue;
  onChange: (value: ObjectValue) => void;
}
