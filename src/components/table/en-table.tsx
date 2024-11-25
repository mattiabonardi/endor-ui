import { useState } from "react";
import { isObject } from "../../utils/schema-utils";
import EndorField from "../field/en-field";
import { EndorTableProps } from "./en-table-declaration";
import { DataSchemaType, DataSchemaTypeArray } from "../../declarations/schema";
import { assignId } from "../../utils/generic-utils";
import EndorCheckbox from "../checkbox/en-checkbox";
import EndorButton from "../button/en-button";

const EndorTable: React.FC<EndorTableProps> = (props) => {
  const [rows, setRows] = useState<DataSchemaTypeArray>(props.value ?? []);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const columns = props.schema.items?.properties;
  const newRowIndex = rows.length;

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

  /**
   * Update the selected rows array. Add or remove row
   * @param select
   * @param rowId
   */
  const toggleRowSelection = (select: boolean, rowId: number) => {
    if (select) {
      setSelectedRows((rows) => {
        rows.push(rowId);
        return rows;
      });
    } else {
      setSelectedRows((rows) => {
        return rows.filter((id) => id !== rowId);
      });
    }
  };

  /**
   * Delete row from internal state and call on change function
   * @param select
   * @param rowId
   */
  const deleteRows = () => {
    const updatedValues = rows.filter((el, index) => {
      if (!selectedRows.includes(index)) {
        return el;
      }
    });
    setSelectedRows([]);
    setRows(updatedValues);
    props.onChange?.(updatedValues);
  };

  if (columns) {
    return (
      <div>
        <EndorButton value="delete" onClick={deleteRows} />
        <table border={1}>
          <thead>
            <tr>
              <th key="selectable-column"></th>
              {Object.keys(columns).map((columnName, index) => (
                <th key={index}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const selectableCellId = assignId(
                props.fieldId,
                "selectable",
                rowIndex
              );
              // Ensure `row` is an object
              if (isObject(row)) {
                return (
                  <tr key={rowIndex}>
                    <td key={selectableCellId}>
                      <EndorCheckbox
                        value={false}
                        onChange={(v: boolean) =>
                          toggleRowSelection(v, rowIndex)
                        }
                        schema={{
                          type: "boolean",
                        }}
                        fieldId={selectableCellId}
                      />
                    </td>
                    {Object.entries(columns).map(([key, schema], colIndex) => {
                      const fieldId = assignId(props.fieldId, key, rowIndex);
                      return (
                        <td key={`${rowIndex}_${colIndex}`}>
                          <EndorField
                            fieldId={fieldId}
                            key={`${rowIndex}_${colIndex}_field`}
                            schema={schema}
                            value={row[key] ?? undefined}
                            onChange={(v) => updateCell(v, key, rowIndex)}
                            onFocus={props.onFocus}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              }
              return null;
            })}
            {/* New line for adding a new row */}
            <tr key={newRowIndex}>
              <td></td>
              {Object.entries(columns).map(([key, schema], colIndex) => {
                const fieldId = assignId(props.fieldId, key, newRowIndex);
                return (
                  <td key={`${newRowIndex}_${colIndex}`}>
                    <EndorField
                      fieldId={fieldId}
                      key={`${newRowIndex}_${colIndex}_field`}
                      schema={schema}
                      value={
                        rows[newRowIndex] && isObject(rows[newRowIndex])
                          ? rows[newRowIndex][key]
                          : undefined
                      }
                      onChange={(v) => updateCell(v, key, newRowIndex)}
                      onFocus={props.onFocus}
                    />
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default EndorTable;
