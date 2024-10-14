import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/BibScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var BibScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => BibScalarWhereWithAggregatesInputSchema), z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BibScalarWhereWithAggregatesInputSchema), z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  filename: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  firstSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var BibScalarWhereWithAggregatesInputSchema_default = BibScalarWhereWithAggregatesInputSchema;

export {
  BibScalarWhereWithAggregatesInputSchema,
  BibScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-R7OBII23.js.map