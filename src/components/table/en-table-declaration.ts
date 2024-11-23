import { DataSchemaTypeArray } from "../../declarations/schema";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorTableProps extends AbstractEndorFieldProps {
  value: DataSchemaTypeArray | undefined;
  onChange: (value: DataSchemaTypeArray) => void;

  // focus
  onFocusFieldId?: string;
}
