/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Lesson as PrismaLesson,
  Course as PrismaCourse,
} from "@prisma/client";

export class LessonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LessonCountArgs, "select">): Promise<number> {
    return this.prisma.lesson.count(args);
  }

  async lessons(args: Prisma.LessonFindManyArgs): Promise<PrismaLesson[]> {
    return this.prisma.lesson.findMany(args);
  }
  async lesson(
    args: Prisma.LessonFindUniqueArgs
  ): Promise<PrismaLesson | null> {
    return this.prisma.lesson.findUnique(args);
  }
  async createLesson(args: Prisma.LessonCreateArgs): Promise<PrismaLesson> {
    return this.prisma.lesson.create(args);
  }
  async updateLesson(args: Prisma.LessonUpdateArgs): Promise<PrismaLesson> {
    return this.prisma.lesson.update(args);
  }
  async deleteLesson(args: Prisma.LessonDeleteArgs): Promise<PrismaLesson> {
    return this.prisma.lesson.delete(args);
  }

  async getCourse(parentId: string): Promise<PrismaCourse | null> {
    return this.prisma.lesson
      .findUnique({
        where: { id: parentId },
      })
      .course();
  }
}
