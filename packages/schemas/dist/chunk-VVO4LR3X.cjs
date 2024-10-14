"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/ToDoListUncheckedCreateInputSchema.ts
var _zod = require('zod');
var ToDoListUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  label: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  tasks: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
var ToDoListUncheckedCreateInputSchema_default = ToDoListUncheckedCreateInputSchema;




exports.ToDoListUncheckedCreateInputSchema = ToDoListUncheckedCreateInputSchema; exports.ToDoListUncheckedCreateInputSchema_default = ToDoListUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-VVO4LR3X.cjs.map