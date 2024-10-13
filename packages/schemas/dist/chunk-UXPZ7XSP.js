import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";

// src/database/inputTypeSchemas/KanBanListScalarWhereInputSchema.ts
import { z } from "zod";
var KanBanListScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => KanBanListScalarWhereInputSchema), z.lazy(() => KanBanListScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => KanBanListScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanBanListScalarWhereInputSchema), z.lazy(() => KanBanListScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  indexWithinBoard: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  boardId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable()
}).strict();
var KanBanListScalarWhereInputSchema_default = KanBanListScalarWhereInputSchema;

export {
  KanBanListScalarWhereInputSchema,
  KanBanListScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-UXPZ7XSP.js.map