"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk3L72GXBOcjs = require('./chunk-3L72GXBO.cjs');


var _chunkLTBSAJNFcjs = require('./chunk-LTBSAJNF.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');


var _chunkYRBUQDVRcjs = require('./chunk-YRBUQDVR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibEntryFindFirstOrThrowArgsSchema.ts
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
  Bib: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibArgsSchema)]).optional(),
  citationGroups: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.CitationsGroupFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  readingList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ReadingListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk3L72GXBOcjs.BibEntryCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibEntryFindFirstOrThrowArgsSchema = _zod.z.object({
  select: BibEntrySelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.BibEntryIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.BibEntryWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkLTBSAJNFcjs.BibEntryOrderByWithRelationInputSchema.array(), _chunkLTBSAJNFcjs.BibEntryOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkYRBUQDVRcjs.BibEntryScalarFieldEnumSchema, _chunkYRBUQDVRcjs.BibEntryScalarFieldEnumSchema.array()]).optional()
}).strict();
var BibEntryFindFirstOrThrowArgsSchema_default = BibEntryFindFirstOrThrowArgsSchema;





exports.BibEntrySelectSchema = BibEntrySelectSchema; exports.BibEntryFindFirstOrThrowArgsSchema = BibEntryFindFirstOrThrowArgsSchema; exports.BibEntryFindFirstOrThrowArgsSchema_default = BibEntryFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-FHSUCV5Q.cjs.map