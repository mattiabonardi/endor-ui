import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorCheckboxProps extends AbstractEndorFieldProps {
  // binding
  value: boolean;
  onChange: (value: boolean) => void;
}
