import {
  KanbanCreateInputSchema
} from "./chunk-LZ5O6Z6M.js";
import {
  KanbanUncheckedCreateInputSchema
} from "./chunk-NTXZSJJ5.js";
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

// src/database/outputTypeSchemas/KanbanCreateArgsSchema.ts
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
var KanbanCreateArgsSchema = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  data: z.union([KanbanCreateInputSchema, KanbanUncheckedCreateInputSchema])
}).strict();
var KanbanCreateArgsSchema_default = KanbanCreateArgsSchema;

export {
  KanbanSelectSchema,
  KanbanCreateArgsSchema,
  KanbanCreateArgsSchema_default
};
//# sourceMappingURL=chunk-BR5WDTEU.js.map