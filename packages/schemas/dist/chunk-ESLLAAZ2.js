import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/ToDoListScalarWhereInputSchema.ts
import { z } from "zod";
var ToDoListScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => ToDoListScalarWhereInputSchema), z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ToDoListScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToDoListScalarWhereInputSchema), z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  label: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var ToDoListScalarWhereInputSchema_default = ToDoListScalarWhereInputSchema;

export {
  ToDoListScalarWhereInputSchema,
  ToDoListScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-ESLLAAZ2.js.map