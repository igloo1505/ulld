import {
  BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema,
  EquationUncheckedCreateNestedManyWithoutMdxNotesInputSchema,
  ReadingListUncheckedCreateNestedManyWithoutMdxNotesInputSchema,
  SubjectUncheckedCreateNestedManyWithoutMdxNotesInputSchema,
  TagUncheckedCreateNestedManyWithoutMdxNotesInputSchema,
  ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInputSchema,
  TopicUncheckedCreateNestedManyWithoutMdxNotesInputSchema
} from "./chunk-5QJWIG3K.js";
import {
  MdxNoteCreateoutgoingQuickLinksInputSchema
} from "./chunk-HAVVN653.js";
import {
  MdxNoteCreateimportantValuesInputSchema
} from "./chunk-FDXW24EV.js";
import {
  MdxNoteCreatecitationsListOrderInputSchema
} from "./chunk-D6LM45E3.js";

// src/database/inputTypeSchemas/MdxNoteUncheckedCreateWithoutDefinitionsInputSchema.ts
import { z } from "zod";
var MdxNoteUncheckedCreateWithoutDefinitionsInputSchema = z.object({
  id: z.number().int().optional(),
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
  sequentialKey: z.string().optional().nullable(),
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
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  citations: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInputSchema).optional()
}).strict();
var MdxNoteUncheckedCreateWithoutDefinitionsInputSchema_default = MdxNoteUncheckedCreateWithoutDefinitionsInputSchema;

export {
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema,
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema_default
};
//# sourceMappingURL=chunk-73QSFQVY.js.map