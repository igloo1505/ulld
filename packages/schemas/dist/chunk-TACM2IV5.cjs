"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk77HUVV5Ncjs = require('./chunk-77HUVV5N.cjs');


var _chunkBO22HPXJcjs = require('./chunk-BO22HPXJ.cjs');

// src/database/outputTypeSchemas/IpynbFindUniqueOrThrowArgsSchema.ts
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
var IpynbFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: IpynbSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.IpynbIncludeSchema.optional(),
  where: _chunkBO22HPXJcjs.IpynbWhereUniqueInputSchema
}).strict();
var IpynbFindUniqueOrThrowArgsSchema_default = IpynbFindUniqueOrThrowArgsSchema;





exports.IpynbSelectSchema = IpynbSelectSchema; exports.IpynbFindUniqueOrThrowArgsSchema = IpynbFindUniqueOrThrowArgsSchema; exports.IpynbFindUniqueOrThrowArgsSchema_default = IpynbFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-TACM2IV5.cjs.map