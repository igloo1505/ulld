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
import {
  KanBanListOrderByWithRelationInputSchema
} from "./chunk-ZU3NMEDR.js";
import {
  KanBanListScalarFieldEnumSchema
} from "./chunk-DNNETPDA.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanListFindFirstArgsSchema.ts
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
var KanBanListFindFirstArgsSchema = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([KanBanListOrderByWithRelationInputSchema.array(), KanBanListOrderByWithRelationInputSchema]).optional(),
  cursor: KanBanListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([KanBanListScalarFieldEnumSchema, KanBanListScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanListFindFirstArgsSchema_default = KanBanListFindFirstArgsSchema;

export {
  KanBanListSelectSchema,
  KanBanListFindFirstArgsSchema,
  KanBanListFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-6YSGYOFX.js.map