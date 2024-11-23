import { useState } from "react";
import EndorForm from "../../../components/form/en-form";
import { Account, accountSchema } from "../../assets/schema/account";

const EnFormInitialValuesPage: React.FC = () => {
  const [account, setAccount] = useState<Account>({
    username: "mattiabonardi",
    firstName: "Mattia",
    lastName: "Bonardi",
    isActive: true,
    roles: ["admin", "developer"],
    paymentMethods: [
      {
        cardNumber: "aaaabbbbccccdddd",
        isActive: true,
      },
      {
        cardNumber: "zzzzxxxxwwwwvvvv",
        isActive: false,
      },
    ],
  });

  return (
    <>
      <h1>Form with initial values</h1>
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

export default EnFormInitialValuesPage;
