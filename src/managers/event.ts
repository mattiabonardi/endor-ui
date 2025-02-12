/**
 * Create the trigger id to create a unique event listener
 * @param componentId
 * @returns
 */
export const createTriggerId = (componentId: string) => {
  return `${componentId}-trigger-listener`;
};

/**
 * Condition to enable trigger
 * @param componentId - The ID of the component
 * @returns boolean - Whether the componentId is a string
 */
export const triggerIsEnabled = (
  componentId: string | undefined
): componentId is string => typeof componentId === "string";
