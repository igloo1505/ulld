import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RelatedValuesAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var RelatedValuesAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RelatedValuesAvgOrderByAggregateInputSchema_default = RelatedValuesAvgOrderByAggregateInputSchema;

export {
  RelatedValuesAvgOrderByAggregateInputSchema,
  RelatedValuesAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-P34I2H53.js.map