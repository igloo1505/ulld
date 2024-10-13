import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanbanIncludeSchema.js
..//inputTypeSchemas/KanbanUpdateInputSchema.js
..//inputTypeSchemas/KanbanUncheckedUpdateInputSchema.js
..//inputTypeSchemas/KanbanWhereUniqueInputSchema.js
import { KanBanListFindManyArgsSchema } from "../outputTypeSchemas/KanBanListFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { KanbanCountOutputTypeArgsSchema } from "../outputTypeSchemas/KanbanCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const KanbanSelectSchema: z.ZodType<Prisma.KanbanSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  lists: z.union([z.boolean(),z.lazy(() => KanBanListFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KanbanCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const KanbanUpdateArgsSchema: z.ZodType<Prisma.KanbanUpdateArgs> = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  data: z.union([ KanbanUpdateInputSchema,KanbanUncheckedUpdateInputSchema ]),
  where: KanbanWhereUniqueInputSchema,
}).strict() ;
export default KanbanUpdateArgsSchema;