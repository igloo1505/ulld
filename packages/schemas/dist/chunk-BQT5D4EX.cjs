"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/ToDoListCreateInputSchema.ts
var _zod = require('zod');
var ToDoListCreateInputSchema = _zod.z.object({
  label: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  tasks: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoCreateNestedManyWithoutToDoListInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutTodoListInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
var ToDoListCreateInputSchema_default = ToDoListCreateInputSchema;




exports.ToDoListCreateInputSchema = ToDoListCreateInputSchema; exports.ToDoListCreateInputSchema_default = ToDoListCreateInputSchema_default;
//# sourceMappingURL=chunk-BQT5D4EX.cjs.map