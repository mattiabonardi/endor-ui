import { DataSchema } from "../../../declarations/schema";

export type Account = {
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

export const accountSchema: DataSchema = {
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
};