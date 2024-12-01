import { EndorStringFieldProps } from "./en-field-declaration";

const EndorStringField: React.FC<EndorStringFieldProps> = (props) => {
  return <div>{props.value}</div>;
};

export default EndorStringField;
