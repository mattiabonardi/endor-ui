import { useEffect, useState } from "react";
import {
  EndorComponent,
  EndorTriggerEvent,
  EndorTriggerEventType,
  EndorVariableMap,
} from "../declarations/framework";
import { DataSchemaType } from "../declarations/schema";
import {
  createTriggerId,
  findTriggersByEventType,
  triggerIsEnabled,
} from "../managers/event";
import { createComponent } from "../managers/component";
import { createTriggerVariables } from "../managers/variables";

const useComponent = (component: Readonly<EndorComponent>) => {
  // define the state data of the component
  const [data, setData] = useState<DataSchemaType>(() => {
    return createComponent(component)?.data;
  });

  useEffect(() => {
    // attach event listener for triggers
    if (triggerIsEnabled(component.id)) {
      document.addEventListener(
        createTriggerId(component.id),
        triggerComponentCallback
      );
    }

    return () => {
      if (triggerIsEnabled(component.id)) {
        document.removeEventListener(
          createTriggerId(component.id),
          triggerComponentCallback
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const triggerComponentCallback: EventListener = (event) => {
    const refreshedComponent = createComponent(
      component,
      (event as EndorTriggerEvent).detail.variables
    );
    setData(refreshedComponent?.data);
  };

  const invokeTriggers = (
    targetComponentIds: string[],
    variables: EndorVariableMap
  ) => {
    targetComponentIds.forEach((id) => {
      const event: EndorTriggerEvent = new CustomEvent(createTriggerId(id), {
        detail: { variables },
      });
      document.dispatchEvent(event);
    });
  };

  const onClick = () => {
    const triggers = findTriggersByEventType(
      EndorTriggerEventType.CLICK,
      component.triggers
    );
    triggers.forEach((t) => {
      // create variables
      const variables = createTriggerVariables(t, data);
      // invoke triggers
      invokeTriggers(t.targets, variables);
    });
  };

  return {
    data,
    onClick,
  };
};

export default useComponent;
