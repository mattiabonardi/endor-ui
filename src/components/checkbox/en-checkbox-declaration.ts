import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorCheckboxProps extends AbstractEndorFieldProps {
  // binding
  value: boolean | undefined;
  onChange: (value: boolean) => void;

  // reserved checkbox
  disabled?: boolean
}
