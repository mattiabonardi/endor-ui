import { EndorComponentShapes } from "../../declarations/framework";
import Section from "../../framework-components/section/section";

const Example1: React.FC = () => {
  return (
    <Section
      components={[
        {
          type: EndorComponentShapes.LABEL,
          data: "Hello World",
        },
      ]}
    />
  );
};

export default Example1;
