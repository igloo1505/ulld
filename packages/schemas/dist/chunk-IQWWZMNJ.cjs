"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkI3GXBDLZcjs = require('./chunk-I3GXBDLZ.cjs');

// src/database/inputTypeSchemas/BibEntryUncheckedCreateInputSchema.ts
var _zod = require('zod');
var BibEntryUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  BibId: _zod.z.number().int().optional().nullable(),
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
  lastAccess: _zod.z.coerce.date().optional(),
  citationGroups: _zod.z.lazy(() => _chunkI3GXBDLZcjs.CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagUncheckedCreateNestedManyWithoutBibEntriesInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicUncheckedCreateNestedManyWithoutBibEntriesInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectUncheckedCreateNestedManyWithoutBibEntriesInputSchema).optional(),
  MdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteUncheckedCreateNestedManyWithoutCitationsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbUncheckedCreateNestedManyWithoutCitationsInputSchema).optional(),
  readingList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ReadingListUncheckedCreateNestedManyWithoutBibEntriesInputSchema).optional()
}).strict();
var BibEntryUncheckedCreateInputSchema_default = BibEntryUncheckedCreateInputSchema;




exports.BibEntryUncheckedCreateInputSchema = BibEntryUncheckedCreateInputSchema; exports.BibEntryUncheckedCreateInputSchema_default = BibEntryUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-IQWWZMNJ.cjs.map