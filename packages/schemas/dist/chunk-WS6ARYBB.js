import {
  DJTWhereInputSchema
} from "./chunk-GGQFIP4C.js";
import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/DJTWhereUniqueInputSchema.ts
import { z } from "zod";
var DJTWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => DJTWhereInputSchema), z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DJTWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DJTWhereInputSchema), z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional()
}).strict());
var DJTWhereUniqueInputSchema_default = DJTWhereUniqueInputSchema;

export {
  DJTWhereUniqueInputSchema,
  DJTWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-WS6ARYBB.js.map