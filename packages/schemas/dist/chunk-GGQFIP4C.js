import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/DJTWhereInputSchema.ts
import { z } from "zod";
var DJTWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => DJTWhereInputSchema), z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DJTWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DJTWhereInputSchema), z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional()
}).strict();
var DJTWhereInputSchema_default = DJTWhereInputSchema;

export {
  DJTWhereInputSchema,
  DJTWhereInputSchema_default
};
//# sourceMappingURL=chunk-GGQFIP4C.js.map