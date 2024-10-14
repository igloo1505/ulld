import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-VKTRMAGB.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/TopicScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var TopicScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => TopicScalarWhereWithAggregatesInputSchema), z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicScalarWhereWithAggregatesInputSchema), z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var TopicScalarWhereWithAggregatesInputSchema_default = TopicScalarWhereWithAggregatesInputSchema;

export {
  TopicScalarWhereWithAggregatesInputSchema,
  TopicScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-F5HYC2IS.js.map