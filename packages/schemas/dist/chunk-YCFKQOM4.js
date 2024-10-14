import {
  KanBanListListRelationFilterSchema,
  KanbanWhereInputSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  TopicListRelationFilterSchema
} from "./chunk-LSOXTUZL.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-YCFKQOM4.js.map