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

// src/database/outputTypeSchemas/KanBanListFindUniqueArgsSchema.ts
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
var KanBanListFindUniqueArgsSchema = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  where: KanBanListWhereUniqueInputSchema
}).strict();
var KanBanListFindUniqueArgsSchema_default = KanBanListFindUniqueArgsSchema;

export {
  KanBanListSelectSchema,
  KanBanListFindUniqueArgsSchema,
  KanBanListFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-ROBEBECP.js.map