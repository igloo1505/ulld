"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkZSZIHYRLcjs = require('./chunk-ZSZIHYRL.cjs');

// src/database/inputTypeSchemas/BibEntrySelectSchema.ts
var _zod = require('zod');
var BibEntrySelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  BibId: _zod.z.boolean().optional(),
  OwnWork: _zod.z.boolean().optional(),
  ColleaguesWork: _zod.z.boolean().optional(),
  read: _zod.z.boolean().optional(),
  htmlCitation: _zod.z.boolean().optional(),
  PdfPath: _zod.z.boolean().optional(),
  address: _zod.z.boolean().optional(),
  annote: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  booktitle: _zod.z.boolean().optional(),
  chapter: _zod.z.boolean().optional(),
  crossref: _zod.z.boolean().optional(),
  doi: _zod.z.boolean().optional(),
  edition: _zod.z.boolean().optional(),
  editor: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  howpublished: _zod.z.boolean().optional(),
  institution: _zod.z.boolean().optional(),
  journal: _zod.z.boolean().optional(),
  month: _zod.z.boolean().optional(),
  note: _zod.z.boolean().optional(),
  number: _zod.z.boolean().optional(),
  organization: _zod.z.boolean().optional(),
  pages: _zod.z.boolean().optional(),
  publisher: _zod.z.boolean().optional(),
  school: _zod.z.boolean().optional(),
  series: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  volume: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  year: _zod.z.boolean().optional(),
  numpages: _zod.z.boolean().optional(),
  url: _zod.z.boolean().optional(),
  issue: _zod.z.boolean().optional(),
  issn: _zod.z.boolean().optional(),
  abstract: _zod.z.boolean().optional(),
  urldate: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  copyright: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  Bib: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibArgsSchema)]).optional(),
  citationGroups: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.CitationsGroupFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  readingList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ReadingListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkZSZIHYRLcjs.BibEntryCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibEntrySelectSchema_default = BibEntrySelectSchema;




exports.BibEntrySelectSchema = BibEntrySelectSchema; exports.BibEntrySelectSchema_default = BibEntrySelectSchema_default;
//# sourceMappingURL=chunk-EVO4UFVS.cjs.map