import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanIncludeSchema } from '../inputTypeSchemas/KanbanIncludeSchema'
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema'
import { KanbanOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanbanOrderByWithRelationInputSchema'
import { KanbanWhereUniqueInputSchema } from '../inputTypeSchemas/KanbanWhereUniqueInputSchema'
import { KanbanScalarFieldEnumSchema } from '../inputTypeSchemas/KanbanScalarFieldEnumSchema'
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

export const KanbanFindManyArgsSchema: z.ZodType<Prisma.KanbanFindManyArgs> = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([ KanbanOrderByWithRelationInputSchema.array(),KanbanOrderByWithRelationInputSchema ]).optional(),
  cursor: KanbanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KanbanScalarFieldEnumSchema,KanbanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default KanbanFindManyArgsSchema;
