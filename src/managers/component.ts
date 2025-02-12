import { EndorComponent, EndorVariableMap } from "../declarations/framework";
import { isString } from "../utils/schema-utils";
import { evaluateExpression } from "./variables";

export const createComponent = (
  component: Readonly<EndorComponent>,
  variables: EndorVariableMap = {}
)=> {
  // resolve data
  if (component.rawData && isString(component.rawData)) {
    return {
      data: evaluateExpression(component.rawData, variables),
    };
  }
};
