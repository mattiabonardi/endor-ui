import {
  EndorComponentShapes,
  EndorSection,
} from "../../declarations/framework";
import Label from "../label/label";

const Section: React.FC<EndorSection> = (props) =>
  props.components.map((component, index) => {
    switch (component.type) {
      case EndorComponentShapes.LABEL:
        return <Label key={index} {...component} />;
    }
  });

export default Section;
