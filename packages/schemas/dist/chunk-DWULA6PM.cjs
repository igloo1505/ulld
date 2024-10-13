"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkA2J5Q2K6cjs = require('./chunk-A2J5Q2K6.cjs');


var _chunkUVLCTKCGcjs = require('./chunk-UVLCTKCG.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/IpynbWhereUniqueInputSchema.ts
var _zod = require('zod');
var IpynbWhereUniqueInputSchema = _zod.z.union([
  _zod.z.object({
    id: _zod.z.number().int(),
    rootRelativePath: _zod.z.string()
  }),
  _zod.z.object({
    id: _zod.z.number().int()
  }),
  _zod.z.object({
    rootRelativePath: _zod.z.string()
  })
]).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  rootRelativePath: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbWhereInputSchema).array()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkA2J5Q2K6cjs.BoolNullableFilterSchema), _zod.z.boolean()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkUVLCTKCGcjs.FloatNullableListFilterSchema).optional(),
  href: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  raw: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional(),
  citations: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibEntryListRelationFilterSchema).optional(),
  sequentialList: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema)]).optional().nullable(),
  readingList: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ReadingListListRelationFilterSchema).optional()
}).strict());
var IpynbWhereUniqueInputSchema_default = IpynbWhereUniqueInputSchema;




exports.IpynbWhereUniqueInputSchema = IpynbWhereUniqueInputSchema; exports.IpynbWhereUniqueInputSchema_default = IpynbWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-DWULA6PM.cjs.map