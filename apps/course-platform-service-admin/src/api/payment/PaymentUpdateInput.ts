import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  course?: CourseWhereUniqueInput | null;
};
