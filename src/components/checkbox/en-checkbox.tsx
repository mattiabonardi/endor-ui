import { useState } from "react";
import { EndorCheckboxProps } from "./en-checkbox-declaration";

const EndorCheckbox: React.FC<EndorCheckboxProps> = (prop) => {
  const [checked, setChecked] = useState<boolean>(prop.value ?? false);

  const onChange = (checked: boolean) => {
    setChecked(checked);
    prop.onChange(checked);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => {
        onChange(event.target.checked);
      }}
    />
  );
};

export default EndorCheckbox;
