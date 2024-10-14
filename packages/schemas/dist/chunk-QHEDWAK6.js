import {
  NestedDateTimeNullableFilterSchema
} from "./chunk-XSZJGJZO.js";

// src/database/inputTypeSchemas/DateTimeNullableFilterSchema.ts
import { z } from "zod";
var DateTimeNullableFilterSchema = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)]).optional().nullable()
}).strict();
var DateTimeNullableFilterSchema_default = DateTimeNullableFilterSchema;

export {
  DateTimeNullableFilterSchema,
  DateTimeNullableFilterSchema_default
};
//# sourceMappingURL=chunk-QHEDWAK6.js.map