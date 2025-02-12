import { EndorComponent } from "../../declarations/framework";
import useComponent from "../../hooks/use-component";
import { isNumber, isString } from "../../utils/schema-utils";

const Label: React.FC<EndorComponent> = (component) => {
  const { data } = useComponent(component);

  if (isString(data) || isNumber(data)) {
    return <div>{data}</div>;
  }
};

export default Label;
