import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";
import { PaymentUpdateManyWithoutCoursesInput } from "./PaymentUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  lessons?: LessonUpdateManyWithoutCoursesInput;
  payments?: PaymentUpdateManyWithoutCoursesInput;
};
