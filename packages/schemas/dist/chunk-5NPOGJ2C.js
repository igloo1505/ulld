import {
  KanbanScalarFieldEnumSchema
} from "./chunk-JBOO4DUT.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-2ED7MBMQ.js";
import {
  KanBanListFindManyArgsSchema,
  KanbanIncludeSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  KanbanCountOutputTypeArgsSchema
} from "./chunk-TWURJNSN.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-YHIWEMYT.js";
import {
  KanbanWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanbanFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var KanbanSelectSchema = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  lists: z.union([z.boolean(), z.lazy(() => KanBanListFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => KanbanCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanbanFindFirstOrThrowArgsSchema = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([KanbanOrderByWithRelationInputSchema.array(), KanbanOrderByWithRelationInputSchema]).optional(),
  cursor: KanbanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([KanbanScalarFieldEnumSchema, KanbanScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanbanFindFirstOrThrowArgsSchema_default = KanbanFindFirstOrThrowArgsSchema;

export {
  KanbanSelectSchema,
  KanbanFindFirstOrThrowArgsSchema,
  KanbanFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-5NPOGJ2C.js.map