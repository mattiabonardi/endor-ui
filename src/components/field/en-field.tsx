import { FieldShapes } from "../../declarations/schema";
import { isBoolean, isString } from "../../utils/value-utils";
import EndorCheckbox from "../checkbox/en-checkbox";
import EndorTextfield from "../textfield/en-textfield";
import { EndorFieldProps } from "./en-field-declaration";

const EndorField: React.FC<EndorFieldProps> = (props) => {
  switch (props.schema?.shape) {
    case FieldShapes.TEXTFIELD:
      {
        if (isString(props.value)) {
          return (
            <EndorTextfield
              schema={props.schema}
              value={props.value}
              onChange={(v) => {
                props.onChange(v);
              }}
            />
          );
        } else {
          window.alert(`Type not supported for TEXTFIELD`);
        }
      }
      break;
    case FieldShapes.CHECKBOX:
      {
        if (isBoolean(props.value)) {
          return (
            <EndorCheckbox
              schema={props.schema}
              value={props.value}
              onChange={(v) => {
                props.onChange(v);
              }}
            />
          );
        } else {
          window.alert(`Type not supported for CHECKBOX`);
        }
      }
      break;
    default:
      window.alert(`Shape ${props.schema?.shape} not handled yet`);
  }
};

export default EndorField;
