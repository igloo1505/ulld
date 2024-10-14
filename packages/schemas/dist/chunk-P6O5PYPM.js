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
import {
  KanBanListOrderByWithRelationInputSchema
} from "./chunk-RZOHPPB5.js";
import {
  KanBanListScalarFieldEnumSchema
} from "./chunk-BENEIZWA.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/KanBanListFindFirstOrThrowArgsSchema.ts
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
var KanBanListFindFirstOrThrowArgsSchema = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([KanBanListOrderByWithRelationInputSchema.array(), KanBanListOrderByWithRelationInputSchema]).optional(),
  cursor: KanBanListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([KanBanListScalarFieldEnumSchema, KanBanListScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanListFindFirstOrThrowArgsSchema_default = KanBanListFindFirstOrThrowArgsSchema;

export {
  KanBanListSelectSchema,
  KanBanListFindFirstOrThrowArgsSchema,
  KanBanListFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-P6O5PYPM.js.map