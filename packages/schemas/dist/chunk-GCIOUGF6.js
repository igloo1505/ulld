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

// src/database/outputTypeSchemas/KanBanListFindUniqueOrThrowArgsSchema.ts
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
var KanBanListFindUniqueOrThrowArgsSchema = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  where: KanBanListWhereUniqueInputSchema
}).strict();
var KanBanListFindUniqueOrThrowArgsSchema_default = KanBanListFindUniqueOrThrowArgsSchema;

export {
  KanBanListSelectSchema,
  KanBanListFindUniqueOrThrowArgsSchema,
  KanBanListFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-GCIOUGF6.js.map