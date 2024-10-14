import {
  NestedBytesWithAggregatesFilterSchema
} from "./chunk-OUBZLTWG.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";
import {
  NestedBytesFilterSchema
} from "./chunk-KZADD6H2.js";

// src/database/inputTypeSchemas/BytesWithAggregatesFilterSchema.ts
import { z } from "zod";
var BytesWithAggregatesFilterSchema = z.object({
  equals: z.instanceof(Buffer).optional(),
  in: z.instanceof(Buffer).array().optional(),
  notIn: z.instanceof(Buffer).array().optional(),
  not: z.union([z.instanceof(Buffer), z.lazy(() => NestedBytesWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBytesFilterSchema).optional(),
  _max: z.lazy(() => NestedBytesFilterSchema).optional()
}).strict();
var BytesWithAggregatesFilterSchema_default = BytesWithAggregatesFilterSchema;

export {
  BytesWithAggregatesFilterSchema,
  BytesWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-WNFCNG2A.js.map