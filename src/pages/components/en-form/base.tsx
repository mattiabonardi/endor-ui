import { useState } from "react";
import EndorForm from "../../../components/form/en-form";

interface Account {
  username: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  roles: string[];
}

const EnFormBasePage: React.FC = () => {
  const [account, setAccount] = useState<Account>({
    username: "",
    firstName: "",
    lastName: "",
    isActive: false,
    roles: [],
  });

  return (
    <>
      <h1>Base Form</h1>
      <EndorForm
        schema={{
          type: "object",
          properties: {
            username: {
              type: "string",
            },
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            isActive: {
              type: "boolean",
            },
            roles: {
              type: "array",
            },
          },
        }}
        //TODO. fix type
        value={account}
        onChange={(e) => setAccount(e)}
      />
      <p>FORM MODEL: {JSON.stringify(account)}</p>
    </>
  );
};

export default EnFormBasePage;