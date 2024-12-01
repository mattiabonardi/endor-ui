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
import EndorChips from "../chips/en-chips";
import EndorForm from "../form/en-form";
import EndorTable from "../table/en-table";
import EndorTextfieldMultipleValues from "../textfield-multiple-values.tsx/en-textfield-multiple-values";
import EndorTextfield from "../textfield/en-textfield";
import { EndorFieldProps } from "./en-field-declaration";
import EndorStringField from "./en-string-field";

const EndorField: React.FC<EndorFieldProps> = (props) => {
  if (isStringType(props.schema.type)) {
    if (props.schema.uiProperties?.editable) {
      return (
        <EndorTextfield
          fieldId={props.fieldId}
          schema={props.schema}
          value={isString(props.value) ? props.value : undefined}
          error={props.error}
          onChange={props.onChange}
          onFocus={props.onFocus}
        />
      );
    } else {
      return (
        <EndorStringField
          fieldId={props.fieldId}
          schema={props.schema}
          value={isString(props.value) ? props.value : undefined}
        />
      );
    }
  } else if (isBooleanType(props.schema.type)) {
    return (
      <EndorCheckbox
        fieldId={props.fieldId}
        schema={props.schema}
        value={isBoolean(props.value) ? props.value : undefined}
        onChange={props.onChange}
        onFocus={props.onFocus}
        disabled={!props.schema.uiProperties?.editable}
      />
    );
  } else if (isObjectType(props.schema.type)) {
    <EndorForm
      fieldId={props.fieldId}
      schema={props.schema}
      value={isObject(props.value) ? props.value : undefined}
      onChange={props.onChange}
      onFocus={props.onFocus}
    />;
  } else if (isArrayType(props.schema.type)) {
    if (props.schema.items?.type && isObjectType(props.schema.items.type)) {
      return (
        <EndorTable
          fieldId={props.fieldId}
          schema={props.schema}
          value={isArray(props.value) ? props.value : []}
          onChange={props.onChange}
          onFocus={props.onFocus}
        />
      );
    } else {
      if (props.schema.uiProperties?.editable) {
        return (
          <EndorTextfieldMultipleValues
            fieldId={props.fieldId}
            schema={props.schema}
            value={isArray(props.value) ? props.value : undefined}
            onChange={props.onChange}
            onFocus={props.onFocus}
          />
        );
      } else {
        return (
          <EndorChips
            value={isArray(props.value) ? props.value : []}
            schema={props.schema}
            fieldId={props.fieldId}
          />
        );
      }
    }
  } else {
    window.alert(`Type not supported`);
  }
};

export default EndorField;
