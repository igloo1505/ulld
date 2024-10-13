import {
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  ToDoListRelationFilterSchema,
  ToDoListWhereInputSchema,
  TopicListRelationFilterSchema
} from "./chunk-XHIJ766H.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/ToDoListWhereUniqueInputSchema.ts
import { z } from "zod";
var ToDoListWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => ToDoListWhereInputSchema), z.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ToDoListWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToDoListWhereInputSchema), z.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
  label: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  tasks: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional()
}).strict());
var ToDoListWhereUniqueInputSchema_default = ToDoListWhereUniqueInputSchema;

export {
  ToDoListWhereUniqueInputSchema,
  ToDoListWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-HMQ6R4MC.js.map