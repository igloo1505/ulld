import {
  BibEntryListRelationFilterSchema,
  CitationsGroupWhereInputSchema
} from "./chunk-LSOXTUZL.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";

// src/database/inputTypeSchemas/CitationsGroupWhereUniqueInputSchema.ts
import { z } from "zod";
var CitationsGroupWhereUniqueInputSchema = z.object({
  name: z.string()
}).and(z.object({
  name: z.string().optional(),
  AND: z.union([z.lazy(() => CitationsGroupWhereInputSchema), z.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => CitationsGroupWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => CitationsGroupWhereInputSchema), z.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict());
var CitationsGroupWhereUniqueInputSchema_default = CitationsGroupWhereUniqueInputSchema;

export {
  CitationsGroupWhereUniqueInputSchema,
  CitationsGroupWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-GY5DALUC.js.map