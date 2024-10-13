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

// src/database/outputTypeSchemas/KanbanFindUniqueArgsSchema.ts
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
var KanbanFindUniqueArgsSchema = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  where: KanbanWhereUniqueInputSchema
}).strict();
var KanbanFindUniqueArgsSchema_default = KanbanFindUniqueArgsSchema;

export {
  KanbanSelectSchema,
  KanbanFindUniqueArgsSchema,
  KanbanFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-2FMQDYRO.js.map