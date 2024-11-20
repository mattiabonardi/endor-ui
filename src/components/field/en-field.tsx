import {
  isArray,
  isArrayType,
  isBoolean,
  isBooleanType,
  isObject,
  isObjectType,
  isString,
  isStringType,
} from "../../utils/schema-utils";
import EndorCheckbox from "../checkbox/en-checkbox";
import EndorForm from "../form/en-form";
import EndorTextfieldMultipleValues from "../textfield-multiple-values.tsx/en.textfield-multiple-values";
import EndorTextfield from "../textfield/en-textfield";
import { EndorFieldProps } from "./en-field-declaration";

const EndorField: React.FC<EndorFieldProps> = (props) => {
  if (isStringType(props.schema.type) && isString(props.value)) {
    return (
      <EndorTextfield
        schema={props.schema}
        value={props.value}
        onChange={(v) => {
          props.onChange(v);
        }}
      />
    );
  } else if (isBooleanType(props.schema.type) && isBoolean(props.value)) {
    return (
      <EndorCheckbox
        schema={props.schema}
        value={props.value}
        onChange={(v) => {
          props.onChange(v);
        }}
      />
    );
  } else if (isObjectType(props.schema.type) && isObject(props.value)) {
    <EndorForm
      schema={props.schema}
      value={props.value}
      onChange={(v) => {
        props.onChange(v);
      }}
    />;
  } else if (isArrayType(props.schema.type) && isArray(props.value)) {
    return (
      <EndorTextfieldMultipleValues
        schema={props.schema}
        value={props.value}
        onChange={(v) => {
          props.onChange(v);
        }}
      />
    );
  } else {
    window.alert(`Type not supported`);
  }
};

export default EndorField;
