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

// src/database/outputTypeSchemas/KanbanFindUniqueOrThrowArgsSchema.ts
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
var KanbanFindUniqueOrThrowArgsSchema = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  where: KanbanWhereUniqueInputSchema
}).strict();
var KanbanFindUniqueOrThrowArgsSchema_default = KanbanFindUniqueOrThrowArgsSchema;

export {
  KanbanSelectSchema,
  KanbanFindUniqueOrThrowArgsSchema,
  KanbanFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-7AO6U4EM.js.map