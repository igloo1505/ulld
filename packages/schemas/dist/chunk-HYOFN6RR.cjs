"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/BibEntryWhereUniqueInputSchema.ts
var _zod = require('zod');
var BibEntryWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.string()
}).and(_zod.z.object({
  id: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryWhereInputSchema).array()]).optional(),
  BibId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  OwnWork: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  ColleaguesWork: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  read: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  htmlCitation: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  PdfPath: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  address: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  annote: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  author: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  booktitle: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  chapter: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  crossref: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  doi: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  edition: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  editor: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  howpublished: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  institution: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  journal: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  month: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  note: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  number: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  organization: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  pages: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  publisher: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  school: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  series: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  volume: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  type: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  year: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  numpages: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  url: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  issue: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  issn: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  abstract: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  urldate: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  copyright: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  Bib: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.BibNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema)]).optional().nullable(),
  citationGroups: _zod.z.lazy(() => _chunkUNUMUJ42cjs.CitationsGroupListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.IpynbListRelationFilterSchema).optional(),
  readingList: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ReadingListListRelationFilterSchema).optional()
}).strict());
var BibEntryWhereUniqueInputSchema_default = BibEntryWhereUniqueInputSchema;




exports.BibEntryWhereUniqueInputSchema = BibEntryWhereUniqueInputSchema; exports.BibEntryWhereUniqueInputSchema_default = BibEntryWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-HYOFN6RR.cjs.map