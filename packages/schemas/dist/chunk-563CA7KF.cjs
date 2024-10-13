"use strict";Object.defineProperty(exports, "__esModule", {value: true});











var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkA2J5Q2K6cjs = require('./chunk-A2J5Q2K6.cjs');


var _chunkUVLCTKCGcjs = require('./chunk-UVLCTKCG.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunk7OHHSSMZcjs = require('./chunk-7OHHSSMZ.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

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
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema).array()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkA2J5Q2K6cjs.BoolNullableFilterSchema), _zod.z.boolean()]).optional().nullable(),
  dietSummaryKey: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  noteType: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  formatted: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkUVLCTKCGcjs.FloatNullableListFilterSchema).optional(),
  imageSrc: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  href: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  floatImages: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  remoteUrl: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  trackRemote: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  citations: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibEntryListRelationFilterSchema).optional(),
  sequentialList: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema)]).optional().nullable(),
  ReadingList: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ReadingListListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationListRelationFilterSchema).optional(),
  definitions: _zod.z.lazy(() => _chunkXQKVAOTYcjs.DefinitionListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListRelationFilterSchema).optional()
}).strict());
var MdxNoteWhereUniqueInputSchema_default = MdxNoteWhereUniqueInputSchema;




exports.MdxNoteWhereUniqueInputSchema = MdxNoteWhereUniqueInputSchema; exports.MdxNoteWhereUniqueInputSchema_default = MdxNoteWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-563CA7KF.cjs.map