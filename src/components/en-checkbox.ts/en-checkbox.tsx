import { EndorCheckboxProps } from "./en-checkbox-declaration";

const EndorCheckbox: React.FC<EndorCheckboxProps> = (prop) => {
  return (
    <input
      type="checkbox"
      checked={prop.value}
      onChange={(event) => {
        prop.onChange(event.target.checked);
      }}
    />
  );
};

export default EndorCheckbox;
