import {
  TopicUncheckedUpdateInputSchema
} from "./chunk-7QO2Q3HA.js";
import {
  TopicUpdateInputSchema
} from "./chunk-7GD5ATLL.js";
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
  TopicWhereUniqueInputSchema
} from "./chunk-ZPW5ICOT.js";

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
//# sourceMappingURL=chunk-MEKUQ6WS.js.map