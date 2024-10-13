import {
  BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema,
  EquationUncheckedCreateNestedManyWithoutTopicsInputSchema,
  IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema,
  MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema,
  PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema,
  QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema,
  ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema,
  ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/TopicUncheckedCreateInputSchema.ts
import { z } from "zod";
var TopicUncheckedCreateInputSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
var TopicUncheckedCreateInputSchema_default = TopicUncheckedCreateInputSchema;

export {
  TopicUncheckedCreateInputSchema,
  TopicUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-O5MKM7VT.js.map