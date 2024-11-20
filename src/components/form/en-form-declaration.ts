import { DataSchemaTypeObject } from "../../declarations/schema";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorFormProps extends AbstractEndorFieldProps {
  // binding
  value: DataSchemaTypeObject;
  onChange: (value: DataSchemaTypeObject) => void;
}
