import { useState } from "react";
import { BooleanValue, StringValue } from "./declarations/value";
import EndorTextfield from "./components/textfield/en-textfield";
import EndorCheckbox from "./components/en-checkbox.ts/en-checkbox";

function App() {
  const [payload, setPayload] = useState<{
    textfieldValue: StringValue;
    checkboxValue: BooleanValue;
  }>({
    textfieldValue: "",
    checkboxValue: false,
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
      <p>{payload.textfieldValue}</p>
      <p>{payload.checkboxValue ? "true" : "false"}</p>
    </>
  );
}

export default App;
