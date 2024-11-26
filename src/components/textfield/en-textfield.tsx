import { EndorTextfieldProps } from "./en-textfield-declaration";

const EndorTextfield: React.FC<EndorTextfieldProps> = (props) => {
  const onChange = (value: string) => {
    props.onChange(value);
  };

  return (
    <input
      type="text"
      id={props.fieldId}
      value={props.value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      onFocus={() => props.onFocus && props.onFocus(props.fieldId)}
    />
  );
};

export default EndorTextfield;
