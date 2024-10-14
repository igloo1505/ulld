import {
  DJTWhereInputSchema
} from "./chunk-AMDBRTLV.js";
import {
  BytesFilterSchema
} from "./chunk-CGUG7AXK.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-ZKHP557W.js.map