import {
  KanBanListCreateInputSchema
} from "./chunk-HZIREGBN.js";
import {
  KanBanListUncheckedCreateInputSchema
} from "./chunk-AWLTDUBF.js";
import {
  KanBanCardFindManyArgsSchema,
  KanBanListIncludeSchema,
  KanbanArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  KanBanListCountOutputTypeArgsSchema
} from "./chunk-LTOOCLVR.js";

// src/database/outputTypeSchemas/KanBanListCreateArgsSchema.ts
import { z } from "zod";
var KanBanListSelectSchema = z.object({
  id: z.boolean().optional(),
  indexWithinBoard: z.boolean().optional(),
  title: z.boolean().optional(),
  boardId: z.boolean().optional(),
  cards: z.union([z.boolean(), z.lazy(() => KanBanCardFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(), z.lazy(() => KanbanArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => KanBanListCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanBanListCreateArgsSchema = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  data: z.union([KanBanListCreateInputSchema, KanBanListUncheckedCreateInputSchema])
}).strict();
var KanBanListCreateArgsSchema_default = KanBanListCreateArgsSchema;

export {
  KanBanListSelectSchema,
  KanBanListCreateArgsSchema,
  KanBanListCreateArgsSchema_default
};
//# sourceMappingURL=chunk-N2ZX36ZG.js.map