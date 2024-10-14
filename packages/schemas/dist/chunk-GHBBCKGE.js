import {
  KanBanListCreateInputSchema
} from "./chunk-HZIREGBN.js";
import {
  KanBanListUncheckedCreateInputSchema
} from "./chunk-AWLTDUBF.js";
import {
  KanBanListUncheckedUpdateInputSchema
} from "./chunk-552H4KB7.js";
import {
  KanBanListUpdateInputSchema
} from "./chunk-CR7RQ347.js";
import {
  KanBanCardFindManyArgsSchema,
  KanBanListIncludeSchema,
  KanbanArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  KanBanListCountOutputTypeArgsSchema
} from "./chunk-LTOOCLVR.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";

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
//# sourceMappingURL=chunk-GHBBCKGE.js.map