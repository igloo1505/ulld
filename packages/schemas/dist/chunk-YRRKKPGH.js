import {
  KanBanListCreateInputSchema
} from "./chunk-W5YSE4DG.js";
import {
  KanBanListUncheckedCreateInputSchema
} from "./chunk-X5RDVCUJ.js";
import {
  KanBanCardFindManyArgsSchema,
  KanBanListIncludeSchema,
  KanbanArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  KanBanListCountOutputTypeArgsSchema
} from "./chunk-LYKRPVBT.js";

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
//# sourceMappingURL=chunk-YRRKKPGH.js.map