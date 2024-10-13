import {
  RandomImageOrderByRelevanceInputSchema
} from "./chunk-OPCUWEAZ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RandomImageOrderByWithRelationInputSchema.ts
import { z } from "zod";
var RandomImageOrderByWithRelationInputSchema = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => RandomImageOrderByRelevanceInputSchema).optional()
}).strict();
var RandomImageOrderByWithRelationInputSchema_default = RandomImageOrderByWithRelationInputSchema;

export {
  RandomImageOrderByWithRelationInputSchema,
  RandomImageOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-W4VTW4KM.js.map