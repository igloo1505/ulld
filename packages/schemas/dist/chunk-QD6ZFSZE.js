import {
  KanBanCardListRelationFilterSchema,
  KanBanListWhereInputSchema,
  KanbanNullableRelationFilterSchema,
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";

// src/database/inputTypeSchemas/KanBanListWhereUniqueInputSchema.ts
import { z } from "zod";
var KanBanListWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => KanBanListWhereInputSchema), z.lazy(() => KanBanListWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => KanBanListWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanBanListWhereInputSchema), z.lazy(() => KanBanListWhereInputSchema).array()]).optional(),
  indexWithinBoard: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  boardId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  cards: z.lazy(() => KanBanCardListRelationFilterSchema).optional(),
  Kanban: z.union([z.lazy(() => KanbanNullableRelationFilterSchema), z.lazy(() => KanbanWhereInputSchema)]).optional().nullable()
}).strict());
var KanBanListWhereUniqueInputSchema_default = KanBanListWhereUniqueInputSchema;

export {
  KanBanListWhereUniqueInputSchema,
  KanBanListWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-QD6ZFSZE.js.map