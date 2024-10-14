import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  BytesWithAggregatesFilterSchema
} from "./chunk-WNFCNG2A.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

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
//# sourceMappingURL=chunk-HJ63DI26.js.map