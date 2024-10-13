import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ToDoListIncludeSchema.js
..//inputTypeSchemas/ToDoListWhereInputSchema.js
..//inputTypeSchemas/ToDoListOrderByWithRelationInputSchema.js
..//inputTypeSchemas/ToDoListWhereUniqueInputSchema.js
..//inputTypeSchemas/ToDoListScalarFieldEnumSchema.js
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
export const ToDoListFindFirstArgsSchema: z.ZodType<Prisma.ToDoListFindFirstArgs> = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ ToDoListOrderByWithRelationInputSchema.array(),ToDoListOrderByWithRelationInputSchema ]).optional(),
  cursor: ToDoListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ToDoListScalarFieldEnumSchema,ToDoListScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default ToDoListFindFirstArgsSchema;