"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkIU7CGSM2cjs = require('./chunk-IU7CGSM2.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');


var _chunk54BATBBKcjs = require('./chunk-54BATBBK.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/ToDoWhereUniqueInputSchema.ts
var _zod = require('zod');
var ToDoWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoWhereInputSchema).array()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  task: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunk54BATBBKcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkIU7CGSM2cjs.EnumTaskCategoryNullableFilterSchema), _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  status: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  priority: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunk54BATBBKcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional(),
  parent: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoWhereInputSchema)]).optional().nullable(),
  child: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListRelationFilterSchema).optional(),
  ToDoList: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListWhereInputSchema)]).optional().nullable()
}).strict());
var ToDoWhereUniqueInputSchema_default = ToDoWhereUniqueInputSchema;




exports.ToDoWhereUniqueInputSchema = ToDoWhereUniqueInputSchema; exports.ToDoWhereUniqueInputSchema_default = ToDoWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-DKFXZBPE.cjs.map