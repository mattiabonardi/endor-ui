import { useState } from "react";
import {
  DataSchemaType,
  DataSchemaTypeObject,
} from "../../declarations/schema";
import { assignId } from "../../utils/generic-utils";
import EndorField from "../field/en-field";
import { EndorFormProps } from "./en-form-declaration";
import "./en-form.css";

function EndorForm<T extends DataSchemaTypeObject>(props: EndorFormProps<T>) {
  const [focusedFieldId, setFocusedFieldId] = useState<string>();
  const [errorMap, setErrorMap] = useState<{
    [index: string]: boolean;
  }>({});

  const onSubmit = () => {
    // check mandatory fields
    const errors: {
      [index: string]: boolean;
    } = {};
    if (props.schema.properties) {
      Object.keys(props.schema.properties).forEach((key) => {
        if (
          props.schema.required &&
          props.schema.required.includes(key) &&
          !props.value?.[key]
        ) {
          errors[key] = true;
        }
      });
    }
    setErrorMap(errors);
  };

  if (props.schema.properties) {
    return (
      <form id={props.fieldId} className="form-container">
        {Object.entries(props.schema.properties).map(([key, schema], index) => (
          <div key={index} className="form-field">
            <p className="form-field-label">
              {key}
              {props.schema.required?.includes(key) ? "*" : ""}
            </p>
            <EndorField
              fieldId={assignId(props.fieldId, key)}
              schema={schema}
              value={props.value?.[key]}
              error={errorMap[key]}
              onFocus={(fieldId) => setFocusedFieldId(fieldId)}
              onChange={(v: DataSchemaType) => {
                const updatedValue = {
                  ...props.value,
                  [key]: v,
                } as T;
                props.onChange(updatedValue);

                // restore focus deferred
                setTimeout(() => {
                  if (focusedFieldId) {
                    document.getElementById(focusedFieldId)?.focus();
                  }
                }, 0);
              }}
            />
          </div>
        ))}
        <input
          type="button"
          value="Submit"
          className="form-submit"
          onClick={onSubmit}
        />
      </form>
    );
  }
}

export default EndorForm;
