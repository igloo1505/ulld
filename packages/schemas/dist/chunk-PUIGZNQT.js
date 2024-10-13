import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/TopicScalarWhereInputSchema.ts
import { z } from "zod";
var TopicScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => TopicScalarWhereInputSchema), z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TopicScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicScalarWhereInputSchema), z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var TopicScalarWhereInputSchema_default = TopicScalarWhereInputSchema;

export {
  TopicScalarWhereInputSchema,
  TopicScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-PUIGZNQT.js.map