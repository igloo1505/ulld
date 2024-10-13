import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/WhiteboardWhereInputSchema.ts
import { z } from "zod";
var WhiteboardWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => WhiteboardWhereInputSchema), z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => WhiteboardWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => WhiteboardWhereInputSchema), z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional()
}).strict();
var WhiteboardWhereInputSchema_default = WhiteboardWhereInputSchema;

export {
  WhiteboardWhereInputSchema,
  WhiteboardWhereInputSchema_default
};
//# sourceMappingURL=chunk-LIAOFIT7.js.map