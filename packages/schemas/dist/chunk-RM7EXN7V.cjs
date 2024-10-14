"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk77HUVV5Ncjs = require('./chunk-77HUVV5N.cjs');


var _chunkPYK7DYT7cjs = require('./chunk-PYK7DYT7.cjs');


var _chunkBO22HPXJcjs = require('./chunk-BO22HPXJ.cjs');


var _chunkOTP4TDC3cjs = require('./chunk-OTP4TDC3.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

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
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  citations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SequentialNoteListArgsSchema)]).optional(),
  readingList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ReadingListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk77HUVV5Ncjs.IpynbCountOutputTypeArgsSchema)]).optional()
}).strict();
var IpynbFindFirstArgsSchema = _zod.z.object({
  select: IpynbSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.IpynbIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.IpynbWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkPYK7DYT7cjs.IpynbOrderByWithRelationInputSchema.array(), _chunkPYK7DYT7cjs.IpynbOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkBO22HPXJcjs.IpynbWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkOTP4TDC3cjs.IpynbScalarFieldEnumSchema, _chunkOTP4TDC3cjs.IpynbScalarFieldEnumSchema.array()]).optional()
}).strict();
var IpynbFindFirstArgsSchema_default = IpynbFindFirstArgsSchema;





exports.IpynbSelectSchema = IpynbSelectSchema; exports.IpynbFindFirstArgsSchema = IpynbFindFirstArgsSchema; exports.IpynbFindFirstArgsSchema_default = IpynbFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-RM7EXN7V.cjs.map