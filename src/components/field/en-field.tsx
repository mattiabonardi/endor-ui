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
  if (isStringType(props.schema.type)) {
    return (
      <EndorTextfield
        schema={props.schema}
        value={isString(props.value) ? props.value : undefined}
        onChange={(v) => {
          props.onChange(v);
        }}
      />
    );
  } else if (isBooleanType(props.schema.type)) {
    return (
      <EndorCheckbox
        schema={props.schema}
        value={isBoolean(props.value) ? props.value : undefined}
        onChange={(v) => {
          props.onChange(v);
        }}
      />
    );
  } else if (isObjectType(props.schema.type)) {
    <EndorForm
      schema={props.schema}
      value={isObject(props.value) ? props.value : undefined}
      onChange={(v) => {
        props.onChange(v);
      }}
    />;
  } else if (isArrayType(props.schema.type)) {
    return (
      <EndorTextfieldMultipleValues
        schema={props.schema}
        value={isArray(props.value) ? props.value : undefined}
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
