"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkP5LOQ5IHcjs = require('./chunk-P5LOQ5IH.cjs');


var _chunkUA5QK3HJcjs = require('./chunk-UA5QK3HJ.cjs');


var _chunkDWULA6PMcjs = require('./chunk-DWULA6PM.cjs');


var _chunkAYVLBSAJcjs = require('./chunk-AYVLBSAJ.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/IpynbFindFirstArgsSchema.ts
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
var IpynbFindFirstArgsSchema = _zod.z.object({
  select: IpynbSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.IpynbIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.IpynbWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUA5QK3HJcjs.IpynbOrderByWithRelationInputSchema.array(), _chunkUA5QK3HJcjs.IpynbOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDWULA6PMcjs.IpynbWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkAYVLBSAJcjs.IpynbScalarFieldEnumSchema, _chunkAYVLBSAJcjs.IpynbScalarFieldEnumSchema.array()]).optional()
}).strict();
var IpynbFindFirstArgsSchema_default = IpynbFindFirstArgsSchema;





exports.IpynbSelectSchema = IpynbSelectSchema; exports.IpynbFindFirstArgsSchema = IpynbFindFirstArgsSchema; exports.IpynbFindFirstArgsSchema_default = IpynbFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-LDDDJMYB.cjs.map