import {
  KanBanCardWhereInputSchema,
  KanBanListNullableRelationFilterSchema,
  KanBanListWhereInputSchema
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

// src/database/inputTypeSchemas/KanBanCardWhereUniqueInputSchema.ts
import { z } from "zod";
var KanBanCardWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => KanBanCardWhereInputSchema), z.lazy(() => KanBanCardWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => KanBanCardWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanBanCardWhereInputSchema), z.lazy(() => KanBanCardWhereInputSchema).array()]).optional(),
  listId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  indexWithinList: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  KanBanList: z.union([z.lazy(() => KanBanListNullableRelationFilterSchema), z.lazy(() => KanBanListWhereInputSchema)]).optional().nullable()
}).strict());
var KanBanCardWhereUniqueInputSchema_default = KanBanCardWhereUniqueInputSchema;

export {
  KanBanCardWhereUniqueInputSchema,
  KanBanCardWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-H26KGHY7.js.map