import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/IpynbSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var IpynbSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();
var IpynbSumOrderByAggregateInputSchema_default = IpynbSumOrderByAggregateInputSchema;

export {
  IpynbSumOrderByAggregateInputSchema,
  IpynbSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-OGCXXOKW.js.map