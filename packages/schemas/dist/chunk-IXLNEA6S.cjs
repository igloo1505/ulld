"use strict";Object.defineProperty(exports, "__esModule", {value: true});











var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkFX4FA72Acjs = require('./chunk-FX4FA72A.cjs');


var _chunkKBBNTZU5cjs = require('./chunk-KBBNTZU5.cjs');


var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/MdxNoteWhereUniqueInputSchema.ts
var _zod = require('zod');
var MdxNoteWhereUniqueInputSchema = _zod.z.union([
  _zod.z.object({
    id: _zod.z.number().int(),
    rootRelativePath: _zod.z.string(),
    quickLink: _zod.z.string()
  }),
  _zod.z.object({
    id: _zod.z.number().int(),
    rootRelativePath: _zod.z.string()
  }),
  _zod.z.object({
    id: _zod.z.number().int(),
    quickLink: _zod.z.string()
  }),
  _zod.z.object({
    id: _zod.z.number().int()
  }),
  _zod.z.object({
    rootRelativePath: _zod.z.string(),
    quickLink: _zod.z.string()
  }),
  _zod.z.object({
    rootRelativePath: _zod.z.string()
  }),
  _zod.z.object({
    quickLink: _zod.z.string()
  })
]).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  rootRelativePath: _zod.z.string().optional(),
  quickLink: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema).array()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkFX4FA72Acjs.BoolNullableFilterSchema), _zod.z.boolean()]).optional().nullable(),
  dietSummaryKey: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  noteType: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  formatted: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkKBBNTZU5cjs.FloatNullableListFilterSchema).optional(),
  imageSrc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  href: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  floatImages: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  remoteUrl: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  trackRemote: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  citations: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryListRelationFilterSchema).optional(),
  sequentialList: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.SequentialNoteListNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.SequentialNoteListWhereInputSchema)]).optional().nullable(),
  ReadingList: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ReadingListListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationListRelationFilterSchema).optional(),
  definitions: _zod.z.lazy(() => _chunkUNUMUJ42cjs.DefinitionListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListRelationFilterSchema).optional()
}).strict());
var MdxNoteWhereUniqueInputSchema_default = MdxNoteWhereUniqueInputSchema;




exports.MdxNoteWhereUniqueInputSchema = MdxNoteWhereUniqueInputSchema; exports.MdxNoteWhereUniqueInputSchema_default = MdxNoteWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-IXLNEA6S.cjs.map