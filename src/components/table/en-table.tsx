import EndorField from "../field/en-field";
import { EndorTableProps } from "./en-table-declaration";

const EndorTable: React.FC<EndorTableProps> = (props) => {
  const columns = Object.keys(props.schema.properties ?? {});
  const rows = props.value;
  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((c) => {
              return (
                <td>
                  <EndorField value={row} />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EndorTable;
