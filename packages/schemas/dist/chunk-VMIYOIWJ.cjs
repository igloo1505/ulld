"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/ToDoListCreateInputSchema.ts
var _zod = require('zod');
var ToDoListCreateInputSchema = _zod.z.object({
  label: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  tasks: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoCreateNestedManyWithoutToDoListInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagCreateNestedManyWithoutTodoListInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
var ToDoListCreateInputSchema_default = ToDoListCreateInputSchema;




exports.ToDoListCreateInputSchema = ToDoListCreateInputSchema; exports.ToDoListCreateInputSchema_default = ToDoListCreateInputSchema_default;
//# sourceMappingURL=chunk-VMIYOIWJ.cjs.map