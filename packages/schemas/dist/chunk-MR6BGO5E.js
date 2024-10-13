import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-IYE6XDHM.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";

// src/database/inputTypeSchemas/KanBanListScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var KanBanListScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  indexWithinBoard: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  boardId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable()
}).strict();
var KanBanListScalarWhereWithAggregatesInputSchema_default = KanBanListScalarWhereWithAggregatesInputSchema;

export {
  KanBanListScalarWhereWithAggregatesInputSchema,
  KanBanListScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-MR6BGO5E.js.map