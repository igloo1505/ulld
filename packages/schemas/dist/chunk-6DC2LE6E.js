import {
  WhiteboardWhereInputSchema
} from "./chunk-LIAOFIT7.js";
import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";

// src/database/inputTypeSchemas/WhiteboardWhereUniqueInputSchema.ts
import { z } from "zod";
var WhiteboardWhereUniqueInputSchema = z.object({
  id: z.string()
}).and(z.object({
  id: z.string().optional(),
  AND: z.union([z.lazy(() => WhiteboardWhereInputSchema), z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => WhiteboardWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => WhiteboardWhereInputSchema), z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  data: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional()
}).strict());
var WhiteboardWhereUniqueInputSchema_default = WhiteboardWhereUniqueInputSchema;

export {
  WhiteboardWhereUniqueInputSchema,
  WhiteboardWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-6DC2LE6E.js.map