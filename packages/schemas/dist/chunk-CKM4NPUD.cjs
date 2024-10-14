"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkIXLNEA6Scjs = require('./chunk-IXLNEA6S.cjs');


var _chunkDKVJ67I3cjs = require('./chunk-DKVJ67I3.cjs');

// src/database/outputTypeSchemas/MdxNoteFindUniqueOrThrowArgsSchema.ts
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
var MdxNoteFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: MdxNoteSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.MdxNoteIncludeSchema.optional(),
  where: _chunkIXLNEA6Scjs.MdxNoteWhereUniqueInputSchema
}).strict();
var MdxNoteFindUniqueOrThrowArgsSchema_default = MdxNoteFindUniqueOrThrowArgsSchema;





exports.MdxNoteSelectSchema = MdxNoteSelectSchema; exports.MdxNoteFindUniqueOrThrowArgsSchema = MdxNoteFindUniqueOrThrowArgsSchema; exports.MdxNoteFindUniqueOrThrowArgsSchema_default = MdxNoteFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-CKM4NPUD.cjs.map