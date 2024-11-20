import React, { useState } from "react";
import { EndorTextfieldMultipleValuesProps } from "./en-textfield-multiple-values-declaration";
import { DataSchemaType, DataSchemaTypeArray } from "../../declarations/schema";

const EndorTextfieldMultipleValues: React.FC<
  EndorTextfieldMultipleValuesProps
> = (props) => {
  // State to store the current input value
  const [inputValue, setInputValue] = useState("");

  // State to store the array of chips
  const [chips, setChips] = useState<DataSchemaTypeArray>(props.value);

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
    <div style={styles.container}>
      <div style={styles.chipContainer}>
        {chips.map((chip, index) => (
          <div key={index} style={styles.chip}>
            {chip as string}
            <span
              style={styles.closeButton}
              onClick={() => handleRemoveChip(chip)}
            >
              &times;
            </span>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter"
          style={styles.input}
        />
      </div>
    </div>
  );
};

// Styles for the component
const styles: {
  [cssName: string]: React.CSSProperties;
} = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "10px",
    width: "100%",
    maxWidth: "400px",
  },
  chipContainer: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "5px",
  },
  chip: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: "16px",
    padding: "5px 10px",
    margin: "5px",
    fontSize: "14px",
  },
  closeButton: {
    marginLeft: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    minWidth: "50px",
  },
};

export default EndorTextfieldMultipleValues;
