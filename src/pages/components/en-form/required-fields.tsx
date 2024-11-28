import { useState } from "react";
import EndorForm from "../../../components/form/en-form";
import {
  Account,
  accountSchemaWithRequiredFields,
} from "../../assets/schema/account";

const EnFormRequiredFieldsPage: React.FC = () => {
  const [account, setAccount] = useState<Account>();

  return (
    <>
      <h1>Form with required fields</h1>
      <EndorForm<Account>
        fieldId="account"
        schema={accountSchemaWithRequiredFields}
        value={account}
        onChange={(e) => setAccount(e)}
      />
      <p>FORM MODEL: {JSON.stringify(account ?? {})}</p>
    </>
  );
};

export default EnFormRequiredFieldsPage;
