import { useState } from "react";
import {
  BooleanValue,
  ObjectValue,
  StringValue,
  Value,
} from "./declarations/value";
import EndorTextfield from "./components/textfield/en-textfield";
import EndorCheckbox from "./components/checkbox/en-checkbox";
import EndorField from "./components/field/en-field";
import { FieldShapes } from "./declarations/schema";
import EndorForm from "./components/form/en-form";

function App() {
  const [payload, setPayload] = useState<{
    textfieldValue: StringValue;
    checkboxValue: BooleanValue;
    fieldValue: Value;
    formValue: ObjectValue;
  }>({
    textfieldValue: "",
    checkboxValue: false,
    fieldValue: "",
    formValue: {
      formTextFieldValue: "",
      formCheckboxValue: false,
    },
  });

  // Update textfield value
  const handleTextfieldChange = (value: StringValue) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      textfieldValue: value,
    }));
  };

  // Update checkbox value
  const handleCheckboxChange = (value: BooleanValue) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      checkboxValue: value,
    }));
  };

  // Update field value
  const handleFieldChange = (value: Value) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      fieldValue: value,
    }));
  };

  // Update field value
  const handleFormChange = (value: ObjectValue) => {
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
          type: "String",
          shape: FieldShapes.TEXTFIELD,
        }}
        value={payload.textfieldValue}
        onChange={handleTextfieldChange}
      />
      <br />
      <p>Simple Checkbox</p>
      <EndorCheckbox
        schema={{
          type: "Boolean",
          shape: FieldShapes.CHECKBOX,
        }}
        value={payload.checkboxValue}
        onChange={handleCheckboxChange}
      />
      <br />
      <p>Field</p>
      <EndorField
        schema={{ type: "String", shape: FieldShapes.TEXTFIELD }}
        value={payload.fieldValue}
        onChange={handleFieldChange}
      />
      <br />
      <p>Form</p>
      <EndorForm
        schema={{
          type: "Object",
          shape: FieldShapes.OBJECT,
          attributes: {
            formTextFieldValue: {
              type: "String",
              shape: FieldShapes.TEXTFIELD,
            },
            formCheckboxValue: {
              type: "Boolean",
              shape: FieldShapes.CHECKBOX,
            },
          },
        }}
        value={payload.formValue}
        onChange={handleFormChange}
      />
      <p>TEXTFIELD MODEL: {payload.textfieldValue}</p>
      <p>CHECKBOX MODEL: {payload.checkboxValue ? "true" : "false"}</p>
      <p>FIELD MODEL: {payload.fieldValue.toString()}</p>
      <p>
        FORM MODEL: {payload.formValue ? JSON.stringify(payload.formValue) : ""}
      </p>
    </>
  );
}

export default App;
