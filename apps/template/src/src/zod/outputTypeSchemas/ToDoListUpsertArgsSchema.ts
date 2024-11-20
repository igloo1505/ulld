import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListIncludeSchema } from '../inputTypeSchemas/ToDoListIncludeSchema'
import { ToDoListWhereUniqueInputSchema } from '../inputTypeSchemas/ToDoListWhereUniqueInputSchema'
import { ToDoListCreateInputSchema } from '../inputTypeSchemas/ToDoListCreateInputSchema'
import { ToDoListUncheckedCreateInputSchema } from '../inputTypeSchemas/ToDoListUncheckedCreateInputSchema'
import { ToDoListUpdateInputSchema } from '../inputTypeSchemas/ToDoListUpdateInputSchema'
import { ToDoListUncheckedUpdateInputSchema } from '../inputTypeSchemas/ToDoListUncheckedUpdateInputSchema'
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { ToDoListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ToDoListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ToDoListSelectSchema: z.ZodType<Prisma.ToDoListSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  tasks: z.union([z.boolean(),z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ToDoListCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ToDoListUpsertArgsSchema: z.ZodType<Prisma.ToDoListUpsertArgs> = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  where: ToDoListWhereUniqueInputSchema,
  create: z.union([ ToDoListCreateInputSchema,ToDoListUncheckedCreateInputSchema ]),
  update: z.union([ ToDoListUpdateInputSchema,ToDoListUncheckedUpdateInputSchema ]),
}).strict() ;

export default ToDoListUpsertArgsSchema;
