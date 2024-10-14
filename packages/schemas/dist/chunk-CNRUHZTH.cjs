"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkIXLNEA6Scjs = require('./chunk-IXLNEA6S.cjs');


var _chunkIRL7XWJUcjs = require('./chunk-IRL7XWJU.cjs');


var _chunkDKVJ67I3cjs = require('./chunk-DKVJ67I3.cjs');


var _chunkURZKV2ZFcjs = require('./chunk-URZKV2ZF.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/MdxNoteFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var MdxNoteSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  isProtected: _zod.z.boolean().optional(),
  dietSummaryKey: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  latexTitle: _zod.z.boolean().optional(),
  rootRelativePath: _zod.z.boolean().optional(),
  noteType: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  formatted: _zod.z.boolean().optional(),
  summary: _zod.z.boolean().optional(),
  citationsListOrder: _zod.z.boolean().optional(),
  importantValues: _zod.z.boolean().optional(),
  imageSrc: _zod.z.boolean().optional(),
  href: _zod.z.boolean().optional(),
  sequentialKey: _zod.z.boolean().optional(),
  sequentialIndex: _zod.z.boolean().optional(),
  floatImages: _zod.z.boolean().optional(),
  remoteUrl: _zod.z.boolean().optional(),
  trackRemote: _zod.z.boolean().optional(),
  outgoingQuickLinks: _zod.z.boolean().optional(),
  quickLink: _zod.z.boolean().optional(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  citations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SequentialNoteListArgsSchema)]).optional(),
  ReadingList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ReadingListFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  definitions: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.DefinitionFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkDKVJ67I3cjs.MdxNoteCountOutputTypeArgsSchema)]).optional()
}).strict();
var MdxNoteFindFirstOrThrowArgsSchema = _zod.z.object({
  select: MdxNoteSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.MdxNoteIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkIRL7XWJUcjs.MdxNoteOrderByWithRelationInputSchema.array(), _chunkIRL7XWJUcjs.MdxNoteOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkIXLNEA6Scjs.MdxNoteWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkURZKV2ZFcjs.MdxNoteScalarFieldEnumSchema, _chunkURZKV2ZFcjs.MdxNoteScalarFieldEnumSchema.array()]).optional()
}).strict();
var MdxNoteFindFirstOrThrowArgsSchema_default = MdxNoteFindFirstOrThrowArgsSchema;





exports.MdxNoteSelectSchema = MdxNoteSelectSchema; exports.MdxNoteFindFirstOrThrowArgsSchema = MdxNoteFindFirstOrThrowArgsSchema; exports.MdxNoteFindFirstOrThrowArgsSchema_default = MdxNoteFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-CNRUHZTH.cjs.map