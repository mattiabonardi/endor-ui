import { DataSchemaTypeObject } from "../../declarations/schema";
import { isObject } from "../../utils/schema-utils";
import EndorField from "../field/en-field";
import { EndorFormProps } from "./en-form-declaration";

function EndorForm<T extends DataSchemaTypeObject>(props: EndorFormProps<T>) {
  if (!isObject(props.value)) {
    window.alert(`Type not supported for TEXTFIELD`);
    return;
  }
  if (props.schema.properties) {
    return Object.entries(props.schema.properties).map(([key, value]) => (
      <EndorField
        schema={{
          type: value.type,
        }}
        value={props.value[key]}
        onChange={(v) => {
          const updatedValue: T = {
            ...props.value,
            [key]: v,
          };
          props.onChange(updatedValue);
        }}
      />
    ));
  }
}

export default EndorForm;
