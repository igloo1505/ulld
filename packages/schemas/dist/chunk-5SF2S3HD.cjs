"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkP5LOQ5IHcjs = require('./chunk-P5LOQ5IH.cjs');


var _chunkDWULA6PMcjs = require('./chunk-DWULA6PM.cjs');

// src/database/outputTypeSchemas/IpynbFindUniqueArgsSchema.ts
var _zod = require('zod');
var IpynbSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  rootRelativePath: _zod.z.boolean().optional(),
  isProtected: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  latexTitle: _zod.z.boolean().optional(),
  citationsListOrder: _zod.z.boolean().optional(),
  importantValues: _zod.z.boolean().optional(),
  href: _zod.z.boolean().optional(),
  outgoingQuickLinks: _zod.z.boolean().optional(),
  raw: _zod.z.boolean().optional(),
  sequentialKey: _zod.z.boolean().optional(),
  sequentialIndex: _zod.z.boolean().optional(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  citations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SequentialNoteListArgsSchema)]).optional(),
  readingList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ReadingListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkP5LOQ5IHcjs.IpynbCountOutputTypeArgsSchema)]).optional()
}).strict();
var IpynbFindUniqueArgsSchema = _zod.z.object({
  select: IpynbSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.IpynbIncludeSchema.optional(),
  where: _chunkDWULA6PMcjs.IpynbWhereUniqueInputSchema
}).strict();
var IpynbFindUniqueArgsSchema_default = IpynbFindUniqueArgsSchema;





exports.IpynbSelectSchema = IpynbSelectSchema; exports.IpynbFindUniqueArgsSchema = IpynbFindUniqueArgsSchema; exports.IpynbFindUniqueArgsSchema_default = IpynbFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-5SF2S3HD.cjs.map