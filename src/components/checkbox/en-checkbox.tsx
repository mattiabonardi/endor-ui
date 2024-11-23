import { useState } from "react";
import { EndorCheckboxProps } from "./en-checkbox-declaration";

const EndorCheckbox: React.FC<EndorCheckboxProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.value ?? false);

  const onChange = (checked: boolean) => {
    setChecked(checked);
    props.onChange(checked);
  };

  return (
    <input
      type="checkbox"
      id={props.fieldId}
      checked={checked}
      onChange={(event) => {
        onChange(event.target.checked);
      }}
      onFocus={() => props.onFocus && props.onFocus(props.fieldId)}
    />
  );
};

export default EndorCheckbox;
