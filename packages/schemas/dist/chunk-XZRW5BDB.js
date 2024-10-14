import {
  WhiteboardOrderByRelevanceInputSchema
} from "./chunk-XPS76D5U.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema.ts
import { z } from "zod";
var WhiteboardOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => WhiteboardOrderByRelevanceInputSchema).optional()
}).strict();
var WhiteboardOrderByWithRelationInputSchema_default = WhiteboardOrderByWithRelationInputSchema;

export {
  WhiteboardOrderByWithRelationInputSchema,
  WhiteboardOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-XZRW5BDB.js.map