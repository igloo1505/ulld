import {
  NestedBytesFilterSchema
} from "./chunk-CEW2QSQM.js";

// src/database/inputTypeSchemas/BytesFilterSchema.ts
import { z } from "zod";
var BytesFilterSchema = z.object({
  equals: z.instanceof(Buffer).optional(),
  in: z.instanceof(Buffer).array().optional(),
  notIn: z.instanceof(Buffer).array().optional(),
  not: z.union([z.instanceof(Buffer), z.lazy(() => NestedBytesFilterSchema)]).optional()
}).strict();
var BytesFilterSchema_default = BytesFilterSchema;

export {
  BytesFilterSchema,
  BytesFilterSchema_default
};
//# sourceMappingURL=chunk-2FW6QR6Z.js.map