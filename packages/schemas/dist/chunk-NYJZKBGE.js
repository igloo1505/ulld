import {
  BibEntryCreateNestedManyWithoutTopicsInputSchema,
  EquationCreateNestedManyWithoutTopicsInputSchema,
  IpynbCreateNestedManyWithoutTopicsInputSchema,
  KanbanCreateNestedOneWithoutTopicsInputSchema,
  MdxNoteCreateNestedManyWithoutTopicsInputSchema,
  PracticeExamCreateNestedManyWithoutTopicsInputSchema,
  QAPairCreateNestedManyWithoutTopicsInputSchema,
  ToDoCreateNestedManyWithoutTopicsInputSchema,
  ToDoListCreateNestedManyWithoutTopicsInputSchema
} from "./chunk-5QJWIG3K.js";

// src/database/inputTypeSchemas/TopicCreateInputSchema.ts
import { z } from "zod";
var TopicCreateInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutTopicsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutTopicsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
var TopicCreateInputSchema_default = TopicCreateInputSchema;

export {
  TopicCreateInputSchema,
  TopicCreateInputSchema_default
};
//# sourceMappingURL=chunk-NYJZKBGE.js.map