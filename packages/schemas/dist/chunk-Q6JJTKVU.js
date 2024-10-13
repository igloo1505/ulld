import {
  BibEntryFindManyArgsSchema,
  EquationFindManyArgsSchema,
  IpynbFindManyArgsSchema,
  KanbanArgsSchema,
  MdxNoteFindManyArgsSchema,
  PracticeExamFindManyArgsSchema,
  QAPairFindManyArgsSchema,
  TagIncludeSchema,
  ToDoFindManyArgsSchema,
  ToDoListFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  TagOrderByWithRelationInputSchema
} from "./chunk-IP6JPH7U.js";
import {
  TagWhereUniqueInputSchema
} from "./chunk-B6NNLS3H.js";
import {
  TagCountOutputTypeArgsSchema
} from "./chunk-QJKI7ITL.js";
import {
  TagScalarFieldEnumSchema
} from "./chunk-KAQM523N.js";
import {
  TagWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/TagFindFirstArgsSchema.ts
import { z } from "zod";
var TagSelectSchema = z.object({
  value: z.boolean().optional(),
  kanbanId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  MdxNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  bibEntries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  QAPair: z.union([z.boolean(), z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(), z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(), z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(), z.lazy(() => KanbanArgsSchema)]).optional(),
  todoList: z.union([z.boolean(), z.lazy(() => ToDoListFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional()
}).strict();
var TagFindFirstArgsSchema = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional()
}).strict();
var TagFindFirstArgsSchema_default = TagFindFirstArgsSchema;

export {
  TagSelectSchema,
  TagFindFirstArgsSchema,
  TagFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-Q6JJTKVU.js.map