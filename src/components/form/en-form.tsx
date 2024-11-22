import {
  DataSchemaType,
  DataSchemaTypeObject,
} from "../../declarations/schema";
import EndorField from "../field/en-field";
import { EndorFormProps } from "./en-form-declaration";
import "./en-form.css";

function EndorForm<T extends DataSchemaTypeObject>(props: EndorFormProps<T>) {
  if (props.schema.properties) {
    return (
      <form className="form-container">
        {Object.entries(props.schema.properties).map(([key, schema], index) => (
          <div key={index} className="form-field">
            <p className="form-field-label">{key}</p>
            <EndorField
              schema={schema}
              value={props.value?.[key]}
              onChange={(v: DataSchemaType) => {
                const updatedValue = {
                  ...props.value,
                  [key]: v,
                } as T;
                props.onChange(updatedValue);
              }}
            />
          </div>
        ))}
      </form>
    );
  }
}

export default EndorForm;
