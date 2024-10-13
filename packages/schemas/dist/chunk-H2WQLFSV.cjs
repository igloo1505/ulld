"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkQ26FAQ5Lcjs = require('./chunk-Q26FAQ5L.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');


var _chunk4NEUKRDUcjs = require('./chunk-4NEUKRDU.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/ToDoWhereUniqueInputSchema.ts
var _zod = require('zod');
var ToDoWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoWhereInputSchema).array()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  task: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunk4NEUKRDUcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkQ26FAQ5Lcjs.EnumTaskCategoryNullableFilterSchema), _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  status: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  priority: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunk4NEUKRDUcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional(),
  parent: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoWhereInputSchema)]).optional().nullable(),
  child: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListRelationFilterSchema).optional(),
  ToDoList: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListWhereInputSchema)]).optional().nullable()
}).strict());
var ToDoWhereUniqueInputSchema_default = ToDoWhereUniqueInputSchema;




exports.ToDoWhereUniqueInputSchema = ToDoWhereUniqueInputSchema; exports.ToDoWhereUniqueInputSchema_default = ToDoWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-H2WQLFSV.cjs.map