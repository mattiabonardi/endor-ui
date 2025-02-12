import { EndorComponent, EndorVariableMap } from "../declarations/framework";
import { DataSchemaType } from "../declarations/schema";
import { isString } from "../utils/schema-utils";
import { evaluateData } from "./variables";

export const createComponent = (
  component: Readonly<EndorComponent>,
  variables: EndorVariableMap = {}
): {
  data: DataSchemaType;
} => {
  // resolve data
  if (component.rawData && isString(component.rawData)) {
    return {
      data: evaluateData(component.rawData, variables),
    };
  }
  return {
    data: undefined,
  };
};
