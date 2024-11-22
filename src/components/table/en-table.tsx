import { useState } from "react";
import { isObject } from "../../utils/schema-utils";
import EndorField from "../field/en-field";
import { EndorTableProps } from "./en-table-declaration";
import { DataSchemaType, DataSchemaTypeArray } from "../../declarations/schema";

const EndorTable: React.FC<EndorTableProps> = (props) => {
  const [rows, setRows] = useState<DataSchemaTypeArray>(props.value);
  const columns = props.schema.items?.properties;

  const updateCell = (value: DataSchemaType, key: string, rowId: number) => {
    const updatedValues = [...rows];
    if (isObject(updatedValues[rowId])) {
      updatedValues[rowId][key] = value;
    }
    setRows(updatedValues);
    props.onChange(updatedValues);
  };

  if (columns) {
    return (
      <table border={1}>
        <thead>
          <tr>
            {Object.keys(columns).map((c, index) => (
              <th key={index}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            if (isObject(row)) {
              return (
                <tr key={rowIndex}>
                  {Object.entries(columns).map(([key, schema], index) => {
                    return (
                      <td key={`${rowIndex}_${index}`}>
                        <EndorField
                          schema={schema}
                          value={row[key]}
                          onChange={(v) => updateCell(v, key, rowIndex)}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  }
};

export default EndorTable;
