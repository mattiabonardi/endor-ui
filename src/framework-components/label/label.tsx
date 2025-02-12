import { EndorComponent } from "../../declarations/framework";
import useComponent from "../../hooks/use-component";
import { isNumber, isString } from "../../utils/schema-utils";

const Label: React.FC<EndorComponent> = (component) => {
  const { data, onClick } = useComponent(component);

  if (isString(data) || isNumber(data)) {
    return <div onClick={onClick}>{data}</div>;
  }
};

export default Label;
