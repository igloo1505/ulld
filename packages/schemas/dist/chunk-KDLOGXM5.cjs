"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BibEntryCreateManyBibInputSchema.ts
var _zod = require('zod');
var BibEntryCreateManyBibInputSchema = _zod.z.object({
  id: _zod.z.string(),
  OwnWork: _zod.z.boolean().optional(),
  ColleaguesWork: _zod.z.boolean().optional(),
  read: _zod.z.boolean().optional(),
  htmlCitation: _zod.z.string().optional().nullable(),
  PdfPath: _zod.z.string().optional().nullable(),
  address: _zod.z.string().optional().nullable(),
  annote: _zod.z.string().optional().nullable(),
  author: _zod.z.string().optional().nullable(),
  booktitle: _zod.z.string().optional().nullable(),
  chapter: _zod.z.string().optional().nullable(),
  crossref: _zod.z.string().optional().nullable(),
  doi: _zod.z.string().optional().nullable(),
  edition: _zod.z.string().optional().nullable(),
  editor: _zod.z.string().optional().nullable(),
  email: _zod.z.string().optional().nullable(),
  howpublished: _zod.z.string().optional().nullable(),
  institution: _zod.z.string().optional().nullable(),
  journal: _zod.z.string().optional().nullable(),
  month: _zod.z.string().optional().nullable(),
  note: _zod.z.string().optional().nullable(),
  number: _zod.z.string().optional().nullable(),
  organization: _zod.z.string().optional().nullable(),
  pages: _zod.z.string().optional().nullable(),
  publisher: _zod.z.string().optional().nullable(),
  school: _zod.z.string().optional().nullable(),
  series: _zod.z.string().optional().nullable(),
  title: _zod.z.string().optional().nullable(),
  volume: _zod.z.string().optional().nullable(),
  type: _zod.z.string().optional().nullable(),
  year: _zod.z.string().optional().nullable(),
  numpages: _zod.z.string().optional().nullable(),
  url: _zod.z.string().optional().nullable(),
  issue: _zod.z.string().optional().nullable(),
  issn: _zod.z.string().optional().nullable(),
  abstract: _zod.z.string().optional().nullable(),
  urldate: _zod.z.string().optional().nullable(),
  keywords: _zod.z.string().optional().nullable(),
  copyright: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var BibEntryCreateManyBibInputSchema_default = BibEntryCreateManyBibInputSchema;




exports.BibEntryCreateManyBibInputSchema = BibEntryCreateManyBibInputSchema; exports.BibEntryCreateManyBibInputSchema_default = BibEntryCreateManyBibInputSchema_default;
//# sourceMappingURL=chunk-KDLOGXM5.cjs.map