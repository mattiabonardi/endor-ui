import { EndorTextfieldProps } from "./en-textfield-declaration";

const EndorTextfield: React.FC<EndorTextfieldProps> = (prop) => {
  return (
    <input
      type="text"
      value={prop.value}
      onChange={(event) => {
        prop.onChange(event.target.value);
      }}
    />
  );
};

export default EndorTextfield;
