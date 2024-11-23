import { useState } from "react";
import { EndorTextfieldProps } from "./en-textfield-declaration";

const EndorTextfield: React.FC<EndorTextfieldProps> = (props) => {
  const [value, setValue] = useState(props.value ?? "");

  const onChange = (value: string) => {
    setValue(value);
    props.onChange(value);
  };

  return (
    <input
      type="text"
      id={props.fieldId}
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      onFocus={() => props.onFocus && props.onFocus(props.fieldId)}
    />
  );
};

export default EndorTextfield;
