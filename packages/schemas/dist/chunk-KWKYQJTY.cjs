"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/ToDoListWhereUniqueInputSchema.ts
var _zod = require('zod');
var ToDoListWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListWhereInputSchema).array()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  tasks: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional()
}).strict());
var ToDoListWhereUniqueInputSchema_default = ToDoListWhereUniqueInputSchema;




exports.ToDoListWhereUniqueInputSchema = ToDoListWhereUniqueInputSchema; exports.ToDoListWhereUniqueInputSchema_default = ToDoListWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-KWKYQJTY.cjs.map