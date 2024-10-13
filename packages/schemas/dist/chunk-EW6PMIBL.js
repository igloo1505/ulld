import {
  BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema,
  EquationUncheckedCreateNestedManyWithoutTagsInputSchema,
  IpynbUncheckedCreateNestedManyWithoutTagsInputSchema,
  MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema,
  PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema,
  QAPairUncheckedCreateNestedManyWithoutTagsInputSchema,
  ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema,
  ToDoUncheckedCreateNestedManyWithoutTagsInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/TagUncheckedCreateInputSchema.ts
import { z } from "zod";
var TagUncheckedCreateInputSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
var TagUncheckedCreateInputSchema_default = TagUncheckedCreateInputSchema;

export {
  TagUncheckedCreateInputSchema,
  TagUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-EW6PMIBL.js.map