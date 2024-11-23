import { useState } from "react";
import EndorForm from "../../../components/form/en-form";
import { Account, accountSchema } from "../../assets/schema/account";

const EnFormBasePage: React.FC = () => {
  const [account, setAccount] = useState<Account>();

  return (
    <>
      <h1>Base Form</h1>
      <EndorForm<Account>
        fieldId="account"
        schema={accountSchema}
        value={account}
        onChange={(e) => setAccount(e)}
      />
      <p>FORM MODEL: {JSON.stringify(account ?? {})}</p>
    </>
  );
};

export default EnFormBasePage;
