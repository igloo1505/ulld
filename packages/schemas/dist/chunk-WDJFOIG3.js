import {
  KanbanScalarFieldEnumSchema
} from "./chunk-ZMBA6D2Z.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-YCFKQOM4.js";
import {
  KanBanListFindManyArgsSchema,
  KanbanIncludeSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  KanbanCountOutputTypeArgsSchema
} from "./chunk-7OMCZZIB.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-U2O53X3F.js";
import {
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/KanbanFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var KanbanSelectSchema = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  lists: z.union([z.boolean(), z.lazy(() => KanBanListFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => KanbanCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanbanFindFirstOrThrowArgsSchema = z.object({
  select: KanbanSelectSchema.optional(),
  include: KanbanIncludeSchema.optional(),
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([KanbanOrderByWithRelationInputSchema.array(), KanbanOrderByWithRelationInputSchema]).optional(),
  cursor: KanbanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([KanbanScalarFieldEnumSchema, KanbanScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanbanFindFirstOrThrowArgsSchema_default = KanbanFindFirstOrThrowArgsSchema;

export {
  KanbanSelectSchema,
  KanbanFindFirstOrThrowArgsSchema,
  KanbanFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-WDJFOIG3.js.map