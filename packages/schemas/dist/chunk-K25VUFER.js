import {
  TagCreateInputSchema
} from "./chunk-EUJN7KKD.js";
import {
  TagUncheckedCreateInputSchema
} from "./chunk-Z6TCVYXD.js";
import {
  TagUncheckedUpdateInputSchema
} from "./chunk-WLDICEWA.js";
import {
  TagUpdateInputSchema
} from "./chunk-T2ZKN2WY.js";
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
} from "./chunk-JV52BDQC.js";
import {
  TagWhereUniqueInputSchema
} from "./chunk-LMIV457O.js";
import {
  TagCountOutputTypeArgsSchema
} from "./chunk-5E7ZVFZI.js";

// src/database/outputTypeSchemas/TagUpsertArgsSchema.ts
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
var TagUpsertArgsSchema = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([TagCreateInputSchema, TagUncheckedCreateInputSchema]),
  update: z.union([TagUpdateInputSchema, TagUncheckedUpdateInputSchema])
}).strict();
var TagUpsertArgsSchema_default = TagUpsertArgsSchema;

export {
  TagSelectSchema,
  TagUpsertArgsSchema,
  TagUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-K25VUFER.js.map