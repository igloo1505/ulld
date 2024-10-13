import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/ToDoListScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var ToDoListScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema), z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema), z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var ToDoListScalarWhereWithAggregatesInputSchema_default = ToDoListScalarWhereWithAggregatesInputSchema;

export {
  ToDoListScalarWhereWithAggregatesInputSchema,
  ToDoListScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-WJDWABYT.js.map