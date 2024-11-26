import { EndorCheckboxProps } from "./en-checkbox-declaration";

const EndorCheckbox: React.FC<EndorCheckboxProps> = (props) => {
  const onChange = (checked: boolean) => {
    props.onChange(checked);
  };

  return (
    <input
      type="checkbox"
      id={props.fieldId}
      checked={props.value ? true : false}
      onChange={(event) => {
        onChange(event.target.checked);
      }}
      onFocus={() => props.onFocus && props.onFocus(props.fieldId)}
    />
  );
};

export default EndorCheckbox;
