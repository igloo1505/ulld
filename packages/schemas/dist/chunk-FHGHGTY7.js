import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/KanbanScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var KanbanScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var KanbanScalarWhereWithAggregatesInputSchema_default = KanbanScalarWhereWithAggregatesInputSchema;

export {
  KanbanScalarWhereWithAggregatesInputSchema,
  KanbanScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-FHGHGTY7.js.map