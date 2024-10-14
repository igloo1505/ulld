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

// src/database/outputTypeSchemas/KanBanListUpdateArgsSchema.ts
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
var KanBanListUpdateArgsSchema = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  data: z.union([KanBanListUpdateInputSchema, KanBanListUncheckedUpdateInputSchema]),
  where: KanBanListWhereUniqueInputSchema
}).strict();
var KanBanListUpdateArgsSchema_default = KanBanListUpdateArgsSchema;

export {
  KanBanListSelectSchema,
  KanBanListUpdateArgsSchema,
  KanBanListUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-L5WMMTHH.js.map