import {
  KanBanListCreateInputSchema
} from "./chunk-W5YSE4DG.js";
import {
  KanBanListUncheckedCreateInputSchema
} from "./chunk-X5RDVCUJ.js";
import {
  KanBanListUncheckedUpdateInputSchema
} from "./chunk-AA6B5OAF.js";
import {
  KanBanListUpdateInputSchema
} from "./chunk-6HD3N4DW.js";
import {
  KanBanCardFindManyArgsSchema,
  KanBanListIncludeSchema,
  KanbanArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  KanBanListCountOutputTypeArgsSchema
} from "./chunk-LYKRPVBT.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";

// src/database/outputTypeSchemas/KanBanListUpsertArgsSchema.ts
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
var KanBanListUpsertArgsSchema = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  where: KanBanListWhereUniqueInputSchema,
  create: z.union([KanBanListCreateInputSchema, KanBanListUncheckedCreateInputSchema]),
  update: z.union([KanBanListUpdateInputSchema, KanBanListUncheckedUpdateInputSchema])
}).strict();
var KanBanListUpsertArgsSchema_default = KanBanListUpsertArgsSchema;

export {
  KanBanListSelectSchema,
  KanBanListUpsertArgsSchema,
  KanBanListUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-2VTCQMWV.js.map