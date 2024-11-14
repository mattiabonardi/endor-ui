import { useState } from "react";
import { BooleanValue, StringValue, Value } from "./declarations/value";
import EndorTextfield from "./components/textfield/en-textfield";
import EndorCheckbox from "./components/checkbox/en-checkbox";
import EndorField from "./components/field/en-field";
import { FieldShapes } from "./declarations/schema";

function App() {
  const [payload, setPayload] = useState<{
    textfieldValue: StringValue;
    checkboxValue: BooleanValue;
    fieldValue: Value;
  }>({
    textfieldValue: "",
    checkboxValue: false,
    fieldValue: "",
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

  return (
    <>
      <h1>Endor UI</h1>
      <EndorTextfield
        value={payload.textfieldValue}
        onChange={handleTextfieldChange}
      />
      <EndorCheckbox
        value={payload.checkboxValue}
        onChange={handleCheckboxChange}
      />
      <EndorField
        schema={{ type: "String", shape: FieldShapes.TEXTFIELD }}
        value={payload.fieldValue}
        onChange={handleFieldChange}
      />
      <p>TEXTFIELD MODEL: {payload.textfieldValue}</p>
      <p>CHECKBOX MODEL: {payload.checkboxValue ? "true" : "false"}</p>
      <p>FIELD MODEL: {payload.fieldValue.toString()}</p>
    </>
  );
}

export default App;
