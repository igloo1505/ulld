import {
  BibEntryCreateNestedManyWithoutIpynbNotesInputSchema,
  ReadingListCreateNestedManyWithoutIpynbNotesInputSchema,
  SequentialNoteListCreateNestedOneWithoutIpynbInputSchema,
  SubjectCreateNestedManyWithoutIpynbNotesInputSchema,
  TagCreateNestedManyWithoutIpynbNotesInputSchema,
  TopicCreateNestedManyWithoutIpynbNotesInputSchema
} from "./chunk-JOZ37TAM.js";
import {
  IpynbCreatecitationsListOrderInputSchema
} from "./chunk-VNCKNFYR.js";
import {
  IpynbCreateoutgoingQuickLinksInputSchema
} from "./chunk-NYP2J3FF.js";
import {
  IpynbCreateimportantValuesInputSchema
} from "./chunk-OIHTKZ5M.js";

// src/database/inputTypeSchemas/IpynbCreateInputSchema.ts
import { z } from "zod";
var IpynbCreateInputSchema = z.object({
  rootRelativePath: z.string(),
  isProtected: z.boolean().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  citationsListOrder: z.union([z.lazy(() => IpynbCreatecitationsListOrderInputSchema), z.string().array()]).optional(),
  importantValues: z.union([z.lazy(() => IpynbCreateimportantValuesInputSchema), z.number().array()]).optional(),
  href: z.string(),
  outgoingQuickLinks: z.union([z.lazy(() => IpynbCreateoutgoingQuickLinksInputSchema), z.string().array()]).optional(),
  raw: z.instanceof(Buffer),
  sequentialIndex: z.number().int().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  citations: z.lazy(() => BibEntryCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListCreateNestedOneWithoutIpynbInputSchema).optional(),
  readingList: z.lazy(() => ReadingListCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();
var IpynbCreateInputSchema_default = IpynbCreateInputSchema;

export {
  IpynbCreateInputSchema,
  IpynbCreateInputSchema_default
};
//# sourceMappingURL=chunk-WWJUEBBB.js.map