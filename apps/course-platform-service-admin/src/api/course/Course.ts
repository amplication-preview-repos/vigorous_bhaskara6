import { Lesson } from "../lesson/Lesson";
import { Payment } from "../payment/Payment";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  name: string | null;
  description: string | null;
  lessons?: Array<Lesson>;
  payments?: Array<Payment>;
};
