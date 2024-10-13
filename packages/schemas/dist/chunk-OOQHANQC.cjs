"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/ToDoListUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var ToDoListUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tasks: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
var ToDoListUncheckedUpdateInputSchema_default = ToDoListUncheckedUpdateInputSchema;




exports.ToDoListUncheckedUpdateInputSchema = ToDoListUncheckedUpdateInputSchema; exports.ToDoListUncheckedUpdateInputSchema_default = ToDoListUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-OOQHANQC.cjs.map