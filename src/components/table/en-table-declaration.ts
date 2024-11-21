import { DataSchemaTypeArray } from "../../declarations/schema";
import { AbstractEndorFieldProps } from "../field/en-field-declaration";

export interface EndorTableProps extends AbstractEndorFieldProps {
  value: DataSchemaTypeArray;
  onChange: (value: DataSchemaTypeArray) => void;
}
