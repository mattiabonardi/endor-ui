import { useState } from "react";
import { AccountList, accountListSchema } from "../../assets/schema/account";
import EndorTable from "../../../components/table/en-table";

const EnTableBasePage: React.FC = () => {
  const [accountList] = useState<AccountList>([
    {
      username: "foobar",
      firstName: "Foo",
      lastName: "Bar",
      isActive: true,
      roles: ["admin", "maintainer"],
    },
    {
      username: "barfoo",
      firstName: "Bar",
      lastName: "Foo",
      isActive: false,
      roles: ["customer"],
    },
  ]);

  return (
    <>
      <h1>Table</h1>
      <EndorTable
        fieldId="accountList"
        schema={accountListSchema}
        value={accountList}
      />
    </>
  );
};

export default EnTableBasePage;
