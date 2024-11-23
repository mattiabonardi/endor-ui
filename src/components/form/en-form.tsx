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

  if (props.schema.properties) {
    return (
      <form id={props.fieldId} className="form-container">
        {Object.entries(props.schema.properties).map(([key, schema], index) => (
          <div key={index} className="form-field">
            <p className="form-field-label">{key}</p>
            <EndorField
              fieldId={assignId(props.fieldId, key)}
              schema={schema}
              value={props.value?.[key]}
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
      </form>
    );
  }
}

export default EndorForm;
