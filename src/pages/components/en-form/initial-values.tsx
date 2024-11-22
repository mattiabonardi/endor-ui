import { useState } from "react";
import EndorForm from "../../../components/form/en-form";

type Account = {
  username: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  roles: string[];
  paymentMethods: {
    cardNumber: string;
    isActive: boolean;
  }[];
};

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
            paymentMethods: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  cardNumber: {
                    type: "string",
                  },
                  isActive: {
                    type: "boolean",
                  },
                },
              },
            },
          },
        }}
        value={account}
        onChange={(e) => setAccount(e)}
      />
      <p>FORM MODEL: {JSON.stringify(account ?? {})}</p>
    </>
  );
};

export default EnFormInitialValuesPage;
