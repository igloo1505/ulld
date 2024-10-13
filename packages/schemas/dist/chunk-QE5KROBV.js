import {
  TagUncheckedUpdateInputSchema
} from "./chunk-2WBMU2QF.js";
import {
  TagUpdateInputSchema
} from "./chunk-6TXIXQPR.js";
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
  TagWhereUniqueInputSchema
} from "./chunk-B6NNLS3H.js";
import {
  TagCountOutputTypeArgsSchema
} from "./chunk-QJKI7ITL.js";

// src/database/outputTypeSchemas/TagUpdateArgsSchema.ts
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
var TagUpdateArgsSchema = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([TagUpdateInputSchema, TagUncheckedUpdateInputSchema]),
  where: TagWhereUniqueInputSchema
}).strict();
var TagUpdateArgsSchema_default = TagUpdateArgsSchema;

export {
  TagSelectSchema,
  TagUpdateArgsSchema,
  TagUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-QE5KROBV.js.map