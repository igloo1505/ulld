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
} from "./chunk-YNCDDFUC.js";
import {
  TopicCountOutputTypeArgsSchema
} from "./chunk-SDNGIBTC.js";
import {
  TopicOrderByWithRelationInputSchema
} from "./chunk-EK4FV3SX.js";
import {
  TopicWhereUniqueInputSchema
} from "./chunk-ZPW5ICOT.js";
import {
  TopicScalarFieldEnumSchema
} from "./chunk-6H2TNO3F.js";
import {
  TopicWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/TopicFindFirstOrThrowArgsSchema.ts
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
var TopicFindFirstOrThrowArgsSchema = z.object({
  select: TopicSelectSchema.optional(),
  include: TopicIncludeSchema.optional(),
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([TopicOrderByWithRelationInputSchema.array(), TopicOrderByWithRelationInputSchema]).optional(),
  cursor: TopicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([TopicScalarFieldEnumSchema, TopicScalarFieldEnumSchema.array()]).optional()
}).strict();
var TopicFindFirstOrThrowArgsSchema_default = TopicFindFirstOrThrowArgsSchema;

export {
  TopicSelectSchema,
  TopicFindFirstOrThrowArgsSchema,
  TopicFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-WV4NQCER.js.map