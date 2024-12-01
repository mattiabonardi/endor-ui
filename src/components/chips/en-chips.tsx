import React from "react";
import "./en-chips.css";
import { EndorChipsProps } from "./en-chips-declaration";
import { isArray } from "../../utils/schema-utils";

const EndorChips: React.FC<EndorChipsProps> = (props) => {
  if (isArray(props.value)) {
    return (
      <div className="chips-container">
        {props.value.map((chip, index) => (
          <div key={index} className="chip">
            {chip as string}
          </div>
        ))}
      </div>
    );
  }
};

export default EndorChips;
