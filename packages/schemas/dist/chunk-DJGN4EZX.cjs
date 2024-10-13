"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/ToDoListWhereUniqueInputSchema.ts
var _zod = require('zod');
var ToDoListWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListWhereInputSchema).array()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  tasks: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional()
}).strict());
var ToDoListWhereUniqueInputSchema_default = ToDoListWhereUniqueInputSchema;




exports.ToDoListWhereUniqueInputSchema = ToDoListWhereUniqueInputSchema; exports.ToDoListWhereUniqueInputSchema_default = ToDoListWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-DJGN4EZX.cjs.map