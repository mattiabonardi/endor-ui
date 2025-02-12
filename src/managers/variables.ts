import { EndorTrigger, EndorVariableMap } from "../declarations/framework";
import { DataSchemaType } from "../declarations/schema";
import { isString } from "../utils/schema-utils";

export const evaluateData = (
  rawData: DataSchemaType,
  variables: EndorVariableMap
): DataSchemaType => {
  if (isString(rawData)) {
    return evaluateStringData(rawData, variables);
  }
};

export const evaluateStringData = (
  rawData: string,
  variables: EndorVariableMap
): string => {
  return rawData.replace(/\$\{(.*?)\}/g, (_, key) => {
    return isString(variables[key]) ? variables[key] : "";
  });
};

export const createTriggerVariables = (
  trigger: EndorTrigger,
  data: DataSchemaType
): EndorVariableMap => {
  const variables: EndorVariableMap = {};

  trigger.variables.forEach((v) => {
    const varName = v.key;
    const varValue = evaluateVariableFromData(v.value, data);
    variables[varName] = varValue;
  });

  return variables;
};

export const evaluateVariableFromData = (
  variableNotation: string,
  data: DataSchemaType
): DataSchemaType => {
  if (variableNotation == "$") {
    return data;
  }
};
