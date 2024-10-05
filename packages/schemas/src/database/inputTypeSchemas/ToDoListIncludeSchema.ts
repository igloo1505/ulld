import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { ToDoListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ToDoListCountOutputTypeArgsSchema"

export const ToDoListIncludeSchema: z.ZodType<Prisma.ToDoListInclude> = z.object({
  tasks: z.union([z.boolean(),z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ToDoListCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ToDoListIncludeSchema;
