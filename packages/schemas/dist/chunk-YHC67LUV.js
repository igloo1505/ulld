// src/database/inputTypeSchemas/BibEntryCreateManyInputSchema.ts
import { z } from "zod";
var BibEntryCreateManyInputSchema = z.object({
  id: z.string(),
  BibId: z.number().int().optional().nullable(),
  OwnWork: z.boolean().optional(),
  ColleaguesWork: z.boolean().optional(),
  read: z.boolean().optional(),
  htmlCitation: z.string().optional().nullable(),
  PdfPath: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  annote: z.string().optional().nullable(),
  author: z.string().optional().nullable(),
  booktitle: z.string().optional().nullable(),
  chapter: z.string().optional().nullable(),
  crossref: z.string().optional().nullable(),
  doi: z.string().optional().nullable(),
  edition: z.string().optional().nullable(),
  editor: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  howpublished: z.string().optional().nullable(),
  institution: z.string().optional().nullable(),
  journal: z.string().optional().nullable(),
  month: z.string().optional().nullable(),
  note: z.string().optional().nullable(),
  number: z.string().optional().nullable(),
  organization: z.string().optional().nullable(),
  pages: z.string().optional().nullable(),
  publisher: z.string().optional().nullable(),
  school: z.string().optional().nullable(),
  series: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  volume: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  year: z.string().optional().nullable(),
  numpages: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
  issue: z.string().optional().nullable(),
  issn: z.string().optional().nullable(),
  abstract: z.string().optional().nullable(),
  urldate: z.string().optional().nullable(),
  keywords: z.string().optional().nullable(),
  copyright: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var BibEntryCreateManyInputSchema_default = BibEntryCreateManyInputSchema;

export {
  BibEntryCreateManyInputSchema,
  BibEntryCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-YHC67LUV.js.map