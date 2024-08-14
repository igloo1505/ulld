import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { ToDoArgsSchema } from "../outputTypeSchemas/ToDoArgsSchema"
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema"
import { ToDoListArgsSchema } from "../outputTypeSchemas/ToDoListArgsSchema"
import { ToDoCountOutputTypeArgsSchema } from "../outputTypeSchemas/ToDoCountOutputTypeArgsSchema"

export const ToDoIncludeSchema: z.ZodType<Prisma.ToDoInclude> = z.object({
  associatedNotes: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => ToDoArgsSchema)]).optional(),
  child: z.union([z.boolean(),z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  ToDoList: z.union([z.boolean(),z.lazy(() => ToDoListArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ToDoCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ToDoIncludeSchema;
