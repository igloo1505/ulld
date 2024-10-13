import {
  BytesWithAggregatesFilterSchema
} from "./chunk-3IDFRH4D.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

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
//# sourceMappingURL=chunk-BTA5W3EG.js.map