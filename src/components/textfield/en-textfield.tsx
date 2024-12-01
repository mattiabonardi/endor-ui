import { EndorTextfieldProps } from "./en-textfield-declaration";
import "../field/en-field.css";

const EndorTextfield: React.FC<EndorTextfieldProps> = (props) => {
  const onChange = (value: string) => {
    props.onChange(value);
  };

  return (
    <div>
      <input
        type="text"
        id={props.fieldId}
        value={props.value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onFocus={() => props.onFocus && props.onFocus(props.fieldId)}
      />
      {props.error && (
        <p className="error-caption">error: field is mandatory!</p>
      )}
    </div>
  );
};

export default EndorTextfield;
