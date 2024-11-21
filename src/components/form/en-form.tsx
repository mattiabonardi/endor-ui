import {
  DataSchemaType,
  DataSchemaTypeObject,
} from "../../declarations/schema";
import EndorField from "../field/en-field";
import { EndorFormProps } from "./en-form-declaration";

function EndorForm<T extends DataSchemaTypeObject>(props: EndorFormProps<T>) {
  if (props.schema.properties) {
    return Object.entries(props.schema.properties).map(([key, value]) => (
      <EndorField
        schema={{
          type: value.type,
        }}
        value={props.value?.[key]}
        onChange={(v: DataSchemaType) => {
          const updatedValue = {
            ...props.value,
            [key]: v,
          } as T;
          props.onChange(updatedValue);
        }}
      />
    ));
  }
}

export default EndorForm;
