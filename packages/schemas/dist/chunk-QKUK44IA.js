import {
  BibEntryCreateNestedManyWithoutMdxNotesInputSchema,
  EquationCreateNestedManyWithoutMdxNotesInputSchema,
  ReadingListCreateNestedManyWithoutMdxNotesInputSchema,
  SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema,
  SubjectCreateNestedManyWithoutMdxNotesInputSchema,
  TagCreateNestedManyWithoutMdxNotesInputSchema,
  ToDoCreateNestedManyWithoutAssociatedNotesInputSchema,
  TopicCreateNestedManyWithoutMdxNotesInputSchema
} from "./chunk-JOZ37TAM.js";
import {
  DefinitionCreateNestedManyWithoutMdxNoteInputSchema
} from "./chunk-ALM7EBPM.js";
import {
  MdxNoteCreateoutgoingQuickLinksInputSchema
} from "./chunk-MJPS6G3W.js";
import {
  MdxNoteCreateimportantValuesInputSchema
} from "./chunk-ANIDADPC.js";
import {
  MdxNoteCreatecitationsListOrderInputSchema
} from "./chunk-LFQBZOFV.js";

// src/database/inputTypeSchemas/MdxNoteCreateInputSchema.ts
import { z } from "zod";
var MdxNoteCreateInputSchema = z.object({
  isProtected: z.boolean().optional().nullable(),
  dietSummaryKey: z.string().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  rootRelativePath: z.string(),
  noteType: z.string(),
  content: z.string(),
  formatted: z.string().optional().nullable(),
  summary: z.string().optional().nullable(),
  citationsListOrder: z.union([z.lazy(() => MdxNoteCreatecitationsListOrderInputSchema), z.string().array()]).optional(),
  importantValues: z.union([z.lazy(() => MdxNoteCreateimportantValuesInputSchema), z.number().array()]).optional(),
  imageSrc: z.string().optional().nullable(),
  href: z.string(),
  sequentialIndex: z.number().optional().nullable(),
  floatImages: z.boolean().optional(),
  remoteUrl: z.string().optional().nullable(),
  trackRemote: z.boolean().optional(),
  outgoingQuickLinks: z.union([z.lazy(() => MdxNoteCreateoutgoingQuickLinksInputSchema), z.string().array()]).optional(),
  quickLink: z.string().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  citations: z.lazy(() => BibEntryCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  definitions: z.lazy(() => DefinitionCreateNestedManyWithoutMdxNoteInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutAssociatedNotesInputSchema).optional()
}).strict();
var MdxNoteCreateInputSchema_default = MdxNoteCreateInputSchema;

export {
  MdxNoteCreateInputSchema,
  MdxNoteCreateInputSchema_default
};
//# sourceMappingURL=chunk-QKUK44IA.js.map