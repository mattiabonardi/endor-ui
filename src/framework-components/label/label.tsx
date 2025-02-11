import { EndorComponent } from "../../declarations/framework";
import { isNumber, isString } from "../../utils/schema-utils";

const Label: React.FC<EndorComponent> = (props) => {
  if (isString(props.data) || isNumber(props.data)) {
    return <div>{props.data}</div>;
  }
};

export default Label;
