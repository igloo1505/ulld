import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/CitationsGroupScalarWhereInputSchema.ts
import { z } from "zod";
var CitationsGroupScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => CitationsGroupScalarWhereInputSchema), z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => CitationsGroupScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => CitationsGroupScalarWhereInputSchema), z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var CitationsGroupScalarWhereInputSchema_default = CitationsGroupScalarWhereInputSchema;

export {
  CitationsGroupScalarWhereInputSchema,
  CitationsGroupScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-KJWZWDNU.js.map