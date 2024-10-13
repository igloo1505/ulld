import {
  BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema,
  ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema,
  SubjectUncheckedCreateNestedManyWithoutIpynbNotesInputSchema,
  TagUncheckedCreateNestedManyWithoutIpynbNotesInputSchema,
  TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema
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

// src/database/inputTypeSchemas/IpynbUncheckedCreateInputSchema.ts
import { z } from "zod";
var IpynbUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  rootRelativePath: z.string(),
  isProtected: z.boolean().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  citationsListOrder: z.union([z.lazy(() => IpynbCreatecitationsListOrderInputSchema), z.string().array()]).optional(),
  importantValues: z.union([z.lazy(() => IpynbCreateimportantValuesInputSchema), z.number().array()]).optional(),
  href: z.string(),
  outgoingQuickLinks: z.union([z.lazy(() => IpynbCreateoutgoingQuickLinksInputSchema), z.string().array()]).optional(),
  raw: z.instanceof(Buffer),
  sequentialKey: z.string().optional().nullable(),
  sequentialIndex: z.number().int().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  citations: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  readingList: z.lazy(() => ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();
var IpynbUncheckedCreateInputSchema_default = IpynbUncheckedCreateInputSchema;

export {
  IpynbUncheckedCreateInputSchema,
  IpynbUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-FUB733CO.js.map