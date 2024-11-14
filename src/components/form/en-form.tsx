import { ObjectValue } from "../../declarations/value";
import { isObject } from "../../utils/value-utils";
import EndorField from "../field/en-field";
import { EndorFormProps } from "./en-form-declaration";

const EndorForm: React.FC<EndorFormProps> = (props) => {
  if (!isObject(props.value)) {
    window.alert(`Type not supported for TEXTFIELD`);
    return;
  }
  if (props.schema.attributes) {
    return Object.entries(props.schema.attributes).map(([key, value]) => (
      <EndorField
        schema={{
          type: value.type,
          shape: value.shape,
        }}
        value={props.value[key]}
        onChange={(v) => {
          const updatedValue: ObjectValue = {
            ...props.value,
          };
          updatedValue[key] = v;
          props.onChange(updatedValue);
        }}
      />
    ));
  }
};

export default EndorForm;
