import {
  TopicUncheckedUpdateInputSchema
} from "./chunk-FHYIBLMM.js";
import {
  TopicUpdateInputSchema
} from "./chunk-CXINMIPW.js";
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
  TopicWhereUniqueInputSchema
} from "./chunk-NV4ZNW2S.js";

// src/database/outputTypeSchemas/TopicUpdateArgsSchema.ts
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
var TopicUpdateArgsSchema = z.object({
  select: TopicSelectSchema.optional(),
  include: TopicIncludeSchema.optional(),
  data: z.union([TopicUpdateInputSchema, TopicUncheckedUpdateInputSchema]),
  where: TopicWhereUniqueInputSchema
}).strict();
var TopicUpdateArgsSchema_default = TopicUpdateArgsSchema;

export {
  TopicSelectSchema,
  TopicUpdateArgsSchema,
  TopicUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-T5SJLQPE.js.map