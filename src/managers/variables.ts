import { EndorVariableMap } from "../declarations/framework";

/**
 * Evaluate expression. This function supports also substring.
 * @param expression
 * @param variables variables key must be in lowercase
 * @returns
 */
export const evaluateExpression = (
  expression: string,
  variables: EndorVariableMap
): string => {
  if (!expression) return expression;
  let evaluated = expression;
  // parse expression
  const tokens = parseBetweenSquareBrackets(evaluated).map((t) =>
    t.toLowerCase()
  );
  while (tokens && tokens.length > 0) {
    tokens.forEach((variableName) => {
      const variable = variables[variableName];
      if (variable) {
        const variableValue = variable.value;
        // replace token
        const escapedToken = `[${variableName}]`;
        const regex = new RegExp(
          escapedToken.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "gi"
        );
        // I used the function as replacement to allow to replace the '$' characters
        // because they are special characters in JavaScript String.prototype.replace().
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        evaluated = evaluated.replace(regex, () => variableValue);
      }
    });
  }
  return evaluated;
};

/**
 * Parse values between square brackets. [ABC] in a string
 * @param expression
 * @returns
 */
export function parseBetweenSquareBrackets(expression: string): string[] {
  const values: string[] = [];
  if (expression.includes("[")) {
    let bracketsCount = 0;
    let value = "";
    for (const c of expression) {
      if (c === "[") {
        bracketsCount++;
        if (bracketsCount === 1) {
          value = "";
        } else {
          value += c;
        }
      } else if (c === "]") {
        bracketsCount--;
        if (bracketsCount === 0) {
          values.push(value);
        } else {
          value += c;
        }
      } else if (bracketsCount > 0) {
        value += c;
      }
    }
  }
  return values;
}

/**
 * Creates a regular expression object, from a string un-escaped
 * @param s string to use for create regular expression (not escaped)
 * @param flags flags used for the regular expression
 * @returns the regular expression object
 */
export function getRegExpFromString(s: string, flags?: string): RegExp {
  return new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags); // $& means the whole matched string
}
