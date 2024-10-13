import {
  KanbanCreateInputSchema
} from "./chunk-LZ5O6Z6M.js";
import {
  KanbanUncheckedCreateInputSchema
} from "./chunk-NTXZSJJ5.js";
import {
  KanbanUncheckedUpdateInputSchema
} from "./chunk-FVG4M2XG.js";
import {
  KanbanUpdateInputSchema
} from "./chunk-4T6KAPYK.js";
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

// src/database/outputTypeSchemas/KanbanUpsertArgsSchema.ts
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
var KanbanUpsertArgsSchema = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  where: KanbanWhereUniqueInputSchema,
  create: z.union([KanbanCreateInputSchema, KanbanUncheckedCreateInputSchema]),
  update: z.union([KanbanUpdateInputSchema, KanbanUncheckedUpdateInputSchema])
}).strict();
var KanbanUpsertArgsSchema_default = KanbanUpsertArgsSchema;

export {
  KanbanSelectSchema,
  KanbanUpsertArgsSchema,
  KanbanUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-3AMHG6DX.js.map