"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateInputSchema = _zod.z.object({
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tasks: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
var ToDoListUpdateInputSchema_default = ToDoListUpdateInputSchema;




exports.ToDoListUpdateInputSchema = ToDoListUpdateInputSchema; exports.ToDoListUpdateInputSchema_default = ToDoListUpdateInputSchema_default;
//# sourceMappingURL=chunk-FXNE6KAV.cjs.map