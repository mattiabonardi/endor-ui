import { useState } from "react";
import EndorTextfield from "./components/textfield/en-textfield";
import EndorCheckbox from "./components/checkbox/en-checkbox";
import EndorField from "./components/field/en-field";
import {
  DataSchemaType,
  DataSchemaTypeArray,
  DataSchemaTypeObject,
} from "./declarations/schema";
import EndorForm from "./components/form/en-form";
import EndorTextfieldMultipleValues from "./components/textfield-multiple-values.tsx/en.textfield-multiple-values";

function App() {
  const [payload, setPayload] = useState<{
    textfieldValue: string;
    checkboxValue: boolean;
    textfieldMultipleValues: DataSchemaTypeArray;
    fieldValue: DataSchemaType;
    formValue: DataSchemaTypeObject;
  }>({
    textfieldValue: "",
    checkboxValue: false,
    textfieldMultipleValues: [],
    fieldValue: "",
    formValue: {
      formTextFieldValue: "",
      formCheckboxValue: false,
    },
  });

  // Update textfield value
  const handleTextfieldChange = (value: string) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      textfieldValue: value,
    }));
  };

  // Update textfield value
  const handleTextfieldMultipleValuesChange = (value: DataSchemaTypeArray) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      textfieldMultipleValues: value,
    }));
  };

  // Update checkbox value
  const handleCheckboxChange = (value: boolean) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      checkboxValue: value,
    }));
  };

  // Update field value
  const handleFieldChange = (value: DataSchemaType) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      fieldValue: value,
    }));
  };

  // Update field value
  const handleFormChange = (value: DataSchemaTypeObject) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      formValue: value,
    }));
  };

  return (
    <>
      <h1>Endor UI</h1>
      <p>Simple Textfield</p>
      <EndorTextfield
        schema={{
          type: "string",
        }}
        value={payload.textfieldValue}
        onChange={handleTextfieldChange}
      />
      <br />
      <p>Simple Checkbox</p>
      <EndorCheckbox
        schema={{
          type: "boolean",
        }}
        value={payload.checkboxValue}
        onChange={handleCheckboxChange}
      />
      <br />
      <p>Textfield multiple values</p>
      <EndorTextfieldMultipleValues
        schema={{
          type: "array",
        }}
        value={payload.textfieldMultipleValues}
        onChange={handleTextfieldMultipleValuesChange}
      />
      <br />
      <p>Field</p>
      <EndorField
        schema={{ type: "string" }}
        value={payload.fieldValue}
        onChange={handleFieldChange}
      />
      <br />
      <p>Form</p>
      <EndorForm
        schema={{
          type: "object",
          properties: {
            formTextFieldValue: {
              type: "string",
            },
            formCheckboxValue: {
              type: "boolean",
            },
          },
        }}
        value={payload.formValue}
        onChange={handleFormChange}
      />
      <p>TEXTFIELD MODEL: {payload.textfieldValue}</p>
      <p>CHECKBOX MODEL: {payload.checkboxValue ? "true" : "false"}</p>
      <p>
        TEXTFIELD MULTIPLE VALUES MODEL:{" "}
        {payload.textfieldMultipleValues.map((e) => e + ", ")}
      </p>
      <p>FIELD MODEL: {payload.fieldValue.toString()}</p>
      <p>
        FORM MODEL: {payload.formValue ? JSON.stringify(payload.formValue) : ""}
      </p>
    </>
  );
}

export default App;
