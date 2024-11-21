import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorTextfieldProps extends AbstractEndorFieldProps {
  // binding
  value: string | undefined;
  onChange: (value: string) => void;
}
