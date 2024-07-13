import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  payments?: Array<Payment>;
};
