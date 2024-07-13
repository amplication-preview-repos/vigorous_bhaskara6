import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";
import { PaymentCreateNestedManyWithoutCoursesInput } from "./PaymentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
  payments?: PaymentCreateNestedManyWithoutCoursesInput;
};
