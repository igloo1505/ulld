import {
  BibEntryFindManyArgsSchema,
  EquationFindManyArgsSchema,
  IpynbFindManyArgsSchema,
  KanbanArgsSchema,
  MdxNoteFindManyArgsSchema,
  PracticeExamFindManyArgsSchema,
  QAPairFindManyArgsSchema,
  ToDoFindManyArgsSchema,
  ToDoListFindManyArgsSchema,
  TopicIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  TopicCountOutputTypeArgsSchema
} from "./chunk-STIDOR6N.js";
import {
  TopicOrderByWithRelationInputSchema
} from "./chunk-JPB4LKY2.js";
import {
  TopicWhereUniqueInputSchema
} from "./chunk-NV4ZNW2S.js";
import {
  TopicScalarFieldEnumSchema
} from "./chunk-WJMNUN3N.js";
import {
  TopicWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/TopicFindFirstArgsSchema.ts
import { z } from "zod";
var TopicSelectSchema = z.object({
  value: z.boolean().optional(),
  kanbanId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  MdxNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  QAPair: z.union([z.boolean(), z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(), z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(), z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(), z.lazy(() => KanbanArgsSchema)]).optional(),
  todoList: z.union([z.boolean(), z.lazy(() => ToDoListFindManyArgsSchema)]).optional(),
  bibEntries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TopicCountOutputTypeArgsSchema)]).optional()
}).strict();
var TopicFindFirstArgsSchema = z.object({
  select: TopicSelectSchema.optional(),
  include: TopicIncludeSchema.optional(),
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([TopicOrderByWithRelationInputSchema.array(), TopicOrderByWithRelationInputSchema]).optional(),
  cursor: TopicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([TopicScalarFieldEnumSchema, TopicScalarFieldEnumSchema.array()]).optional()
}).strict();
var TopicFindFirstArgsSchema_default = TopicFindFirstArgsSchema;

export {
  TopicSelectSchema,
  TopicFindFirstArgsSchema,
  TopicFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-JG57XGDR.js.map