import {
  BytesWithAggregatesFilterSchema
} from "./chunk-WNFCNG2A.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/WhiteboardScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var WhiteboardScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema), z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema), z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => BytesWithAggregatesFilterSchema), z.instanceof(Buffer)]).optional()
}).strict();
var WhiteboardScalarWhereWithAggregatesInputSchema_default = WhiteboardScalarWhereWithAggregatesInputSchema;

export {
  WhiteboardScalarWhereWithAggregatesInputSchema,
  WhiteboardScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-7OYOOWEX.js.map