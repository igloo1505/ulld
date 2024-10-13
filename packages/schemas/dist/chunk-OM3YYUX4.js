import {
  BibEntryCreateNestedManyWithoutTagsInputSchema,
  EquationCreateNestedManyWithoutTagsInputSchema,
  IpynbCreateNestedManyWithoutTagsInputSchema,
  KanbanCreateNestedOneWithoutTagsInputSchema,
  MdxNoteCreateNestedManyWithoutTagsInputSchema,
  PracticeExamCreateNestedManyWithoutTagsInputSchema,
  QAPairCreateNestedManyWithoutTagsInputSchema,
  ToDoCreateNestedManyWithoutTagsInputSchema,
  ToDoListCreateNestedManyWithoutTagsInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/TagCreateInputSchema.ts
import { z } from "zod";
var TagCreateInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutTagsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutTagsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
var TagCreateInputSchema_default = TagCreateInputSchema;

export {
  TagCreateInputSchema,
  TagCreateInputSchema_default
};
//# sourceMappingURL=chunk-OM3YYUX4.js.map