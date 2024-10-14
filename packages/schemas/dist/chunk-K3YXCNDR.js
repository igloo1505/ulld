import {
  MdxNoteCreateoutgoingQuickLinksInputSchema
} from "./chunk-HAVVN653.js";
import {
  MdxNoteCreateimportantValuesInputSchema
} from "./chunk-FDXW24EV.js";
import {
  MdxNoteCreatecitationsListOrderInputSchema
} from "./chunk-D6LM45E3.js";

// src/database/inputTypeSchemas/MdxNoteCreateManySequentialListInputSchema.ts
import { z } from "zod";
var MdxNoteCreateManySequentialListInputSchema = z.object({
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
  sequentialIndex: z.number().optional().nullable(),
  floatImages: z.boolean().optional(),
  remoteUrl: z.string().optional().nullable(),
  trackRemote: z.boolean().optional(),
  outgoingQuickLinks: z.union([z.lazy(() => MdxNoteCreateoutgoingQuickLinksInputSchema), z.string().array()]).optional(),
  quickLink: z.string().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var MdxNoteCreateManySequentialListInputSchema_default = MdxNoteCreateManySequentialListInputSchema;

export {
  MdxNoteCreateManySequentialListInputSchema,
  MdxNoteCreateManySequentialListInputSchema_default
};
//# sourceMappingURL=chunk-K3YXCNDR.js.map