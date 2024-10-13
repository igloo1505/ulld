import {
  KanBanListListRelationFilterSchema,
  KanbanWhereInputSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  TopicListRelationFilterSchema
} from "./chunk-XHIJ766H.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/KanbanWhereUniqueInputSchema.ts
import { z } from "zod";
var KanbanWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => KanbanWhereInputSchema), z.lazy(() => KanbanWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => KanbanWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanbanWhereInputSchema), z.lazy(() => KanbanWhereInputSchema).array()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lists: z.lazy(() => KanBanListListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional()
}).strict());
var KanbanWhereUniqueInputSchema_default = KanbanWhereUniqueInputSchema;

export {
  KanbanWhereUniqueInputSchema,
  KanbanWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-2ED7MBMQ.js.map