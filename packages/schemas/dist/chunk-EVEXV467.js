import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-IYE6XDHM.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";

// src/database/inputTypeSchemas/KanBanCardScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var KanBanCardScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema), z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema), z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  listId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  indexWithinList: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  label: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var KanBanCardScalarWhereWithAggregatesInputSchema_default = KanBanCardScalarWhereWithAggregatesInputSchema;

export {
  KanBanCardScalarWhereWithAggregatesInputSchema,
  KanBanCardScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-EVEXV467.js.map