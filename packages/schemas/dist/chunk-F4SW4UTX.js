import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";

// src/database/inputTypeSchemas/KanBanCardScalarWhereInputSchema.ts
import { z } from "zod";
var KanBanCardScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => KanBanCardScalarWhereInputSchema), z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => KanBanCardScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanBanCardScalarWhereInputSchema), z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  listId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  indexWithinList: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var KanBanCardScalarWhereInputSchema_default = KanBanCardScalarWhereInputSchema;

export {
  KanBanCardScalarWhereInputSchema,
  KanBanCardScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-F4SW4UTX.js.map