import { useEffect, useState } from "react";
import { EndorComponent } from "../declarations/framework";
import { DataSchemaType } from "../declarations/schema";
import { createTriggerId, triggerIsEnabled } from "../managers/event";
import { createComponent } from "../managers/component";

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

  const triggerComponentCallback = () => {
    const refreshedComponent = createComponent(component);
    setData(refreshedComponent?.data);
  };

  return {
    data,
  };
};

export default useComponent;
