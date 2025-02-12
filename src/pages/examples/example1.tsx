import {
  EndorComponentShapes,
  EndorTriggerEventType,
} from "../../declarations/framework";
import Section from "../../framework-components/section/section";

const Example1: React.FC = () => {
  return (
    <Section
      components={[
        // first label
        {
          type: EndorComponentShapes.LABEL,
          rawData: "Mattia",
          triggers: [
            {
              eventType: EndorTriggerEventType.CLICK,
              targets: ["target-label"],
              variables: [
                {
                  key: "variable",
                  value: "$",
                },
              ],
            },
          ],
        },
        // second label
        {
          type: EndorComponentShapes.LABEL,
          id: "target-label",
          rawData: "Ciao ${variable}",
        },
      ]}
    />
  );
};

export default Example1;
