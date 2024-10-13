"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3XLUOYHLcjs = require('./chunk-3XLUOYHL.cjs');


var _chunkT7GZ65ZXcjs = require('./chunk-T7GZ65ZX.cjs');


var _chunkNQZMAUMEcjs = require('./chunk-NQZMAUME.cjs');


var _chunkSE3F2SOHcjs = require('./chunk-SE3F2SOH.cjs');











var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk563CA7KFcjs = require('./chunk-563CA7KF.cjs');


var _chunkK6436L76cjs = require('./chunk-K6436L76.cjs');

// src/database/outputTypeSchemas/MdxNoteUpsertArgsSchema.ts
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
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  citations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SequentialNoteListArgsSchema)]).optional(),
  ReadingList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ReadingListFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  definitions: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.DefinitionFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkK6436L76cjs.MdxNoteCountOutputTypeArgsSchema)]).optional()
}).strict();
var MdxNoteUpsertArgsSchema = _zod.z.object({
  select: MdxNoteSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.MdxNoteIncludeSchema.optional(),
  where: _chunk563CA7KFcjs.MdxNoteWhereUniqueInputSchema,
  create: _zod.z.union([_chunk3XLUOYHLcjs.MdxNoteCreateInputSchema, _chunkT7GZ65ZXcjs.MdxNoteUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkSE3F2SOHcjs.MdxNoteUpdateInputSchema, _chunkNQZMAUMEcjs.MdxNoteUncheckedUpdateInputSchema])
}).strict();
var MdxNoteUpsertArgsSchema_default = MdxNoteUpsertArgsSchema;





exports.MdxNoteSelectSchema = MdxNoteSelectSchema; exports.MdxNoteUpsertArgsSchema = MdxNoteUpsertArgsSchema; exports.MdxNoteUpsertArgsSchema_default = MdxNoteUpsertArgsSchema_default;
//# sourceMappingURL=chunk-BDCKQZAC.cjs.map