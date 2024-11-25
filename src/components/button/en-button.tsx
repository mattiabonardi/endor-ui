import { EndorButtonProps } from "./en-button-declaration";

const EndorButton: React.FC<EndorButtonProps> = (props) => {
  return <input type="button" value={props.value} onClick={props.onClick} />;
};

export default EndorButton;
