"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/ToDoListUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var ToDoListUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tasks: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
var ToDoListUncheckedUpdateInputSchema_default = ToDoListUncheckedUpdateInputSchema;




exports.ToDoListUncheckedUpdateInputSchema = ToDoListUncheckedUpdateInputSchema; exports.ToDoListUncheckedUpdateInputSchema_default = ToDoListUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-QWKCZC6Q.cjs.map