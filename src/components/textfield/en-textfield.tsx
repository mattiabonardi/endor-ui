import { useState } from "react";
import { EndorTextfieldProps } from "./en-textfield-declaration";

const EndorTextfield: React.FC<EndorTextfieldProps> = (prop) => {
  const [value, setValue] = useState(prop.value ?? "");

  const onChange = (value: string) => {
    setValue(value);
    prop.onChange(value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

export default EndorTextfield;
