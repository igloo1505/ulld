import {
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  ToDoListRelationFilterSchema,
  ToDoListWhereInputSchema,
  TopicListRelationFilterSchema
} from "./chunk-LSOXTUZL.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-UYCDM7HT.js.map