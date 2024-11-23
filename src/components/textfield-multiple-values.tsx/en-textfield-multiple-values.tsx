import React, { useState } from "react";
import { EndorTextfieldMultipleValuesProps } from "./en-textfield-multiple-values-declaration";
import { DataSchemaType, DataSchemaTypeArray } from "../../declarations/schema";
import "./en-textfield-multiple-values.css";

const EndorTextfieldMultipleValues: React.FC<
  EndorTextfieldMultipleValuesProps
> = (props) => {
  // State to store the current input value
  const [inputValue, setInputValue] = useState("");

  // State to store the array of chips
  const [chips, setChips] = useState<DataSchemaTypeArray>(props.value ?? []);

  // Handle adding a chip on Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && inputValue.trim()) {
      if (!chips.includes(inputValue.trim())) {
        const values: DataSchemaTypeArray = [...chips, inputValue.trim()];

        setChips(values);
        // call on change
        props.onChange(values);
      }
      setInputValue("");
      e.preventDefault(); // Prevent form submission if wrapped in a form
    }
  };

  // Handle removing a chip
  const handleRemoveChip = (chipToRemove: DataSchemaType) => {
    const values: DataSchemaTypeArray = chips.filter(
      (chip) => chip !== chipToRemove
    );
    setChips(values);
    // call on change
    props.onChange(values);
  };

  return (
    <div className="field-container">
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip as string}
            <span
              className="close-button"
              onClick={() => handleRemoveChip(chip)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        id={props.fieldId}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter"
      />
    </div>
  );
};

export default EndorTextfieldMultipleValues;
