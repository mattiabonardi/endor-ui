import { EndorTrigger, EndorTriggerEventType } from "../declarations/framework";

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

/**
 * Find all triggers based that matches with event type
 * @param eventType
 * @param triggers
 * @returns
 */
export const findTriggersByEventType = (
  eventType: EndorTriggerEventType,
  triggers: EndorTrigger[] = []
): EndorTrigger[] => triggers.filter((t) => t.eventType === eventType);