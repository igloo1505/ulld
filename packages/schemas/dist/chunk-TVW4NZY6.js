import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  BytesWithAggregatesFilterSchema
} from "./chunk-3IDFRH4D.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/DJTScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var DJTScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => DJTScalarWhereWithAggregatesInputSchema), z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DJTScalarWhereWithAggregatesInputSchema), z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => BytesWithAggregatesFilterSchema), z.instanceof(Buffer)]).optional()
}).strict();
var DJTScalarWhereWithAggregatesInputSchema_default = DJTScalarWhereWithAggregatesInputSchema;

export {
  DJTScalarWhereWithAggregatesInputSchema,
  DJTScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-TVW4NZY6.js.map