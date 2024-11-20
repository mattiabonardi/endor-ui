import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorTextfieldProps extends AbstractEndorFieldProps {
  // binding
  value: string;
  onChange: (value: string) => void;
}
