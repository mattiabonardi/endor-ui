import { DataSchemaTypeObject } from "../../declarations/schema";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorFormProps<T extends DataSchemaTypeObject>
  extends AbstractEndorFieldProps {
  // binding
  value: T | undefined;
  onChange: (value: T) => void;
}
