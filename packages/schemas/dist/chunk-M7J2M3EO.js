import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/CitationsGroupScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var CitationsGroupScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var CitationsGroupScalarWhereWithAggregatesInputSchema_default = CitationsGroupScalarWhereWithAggregatesInputSchema;

export {
  CitationsGroupScalarWhereWithAggregatesInputSchema,
  CitationsGroupScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-M7J2M3EO.js.map