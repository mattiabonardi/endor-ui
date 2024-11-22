import { useState } from "react";
import { isObject } from "../../utils/schema-utils";
import EndorField from "../field/en-field";
import { EndorTableProps } from "./en-table-declaration";
import { DataSchemaType, DataSchemaTypeArray } from "../../declarations/schema";

const EndorTable: React.FC<EndorTableProps> = (props) => {
  // Initialize rows with props.value or an empty array
  const [rows, setRows] = useState<DataSchemaTypeArray>(props.value ?? []);
  const columns = props.schema.items?.properties;
  const newLineIndex = rows.length;

  const updateCell = (value: DataSchemaType, key: string, rowId: number) => {
    const updatedValues = [...rows];
    if (!updatedValues[rowId]) {
      updatedValues[rowId] = { [key]: value }; // Create a new row if missing
    } else {
      if (isObject(updatedValues[rowId])) {
        updatedValues[rowId][key] = value;
      }
    }
    setRows(updatedValues);
    props.onChange?.(updatedValues);
  };

  if (columns) {
    return (
      <table border={1}>
        <thead>
          <tr>
            {Object.keys(columns).map((columnName, index) => (
              <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            // Ensure `row` is an object
            if (isObject(row)) {
              return (
                <tr key={rowIndex}>
                  {Object.entries(columns).map(([key, schema], colIndex) => (
                    <td key={`${rowIndex}_${colIndex}`}>
                      <EndorField
                        schema={schema}
                        value={row[key] ?? undefined}
                        onChange={(v) => updateCell(v, key, rowIndex)}
                      />
                    </td>
                  ))}
                </tr>
              );
            }
            return null;
          })}
          {/* New line for adding a new row */}
          <tr key={newLineIndex}>
            {Object.entries(columns).map(([key, schema], colIndex) => (
              <td key={`new-line-field-${colIndex}`}>
                <EndorField
                  schema={schema}
                  value={
                    rows[newLineIndex] && isObject(rows[newLineIndex])
                      ? rows[newLineIndex][key]
                      : undefined
                  }
                  onChange={(v) => updateCell(v, key, newLineIndex)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default EndorTable;
