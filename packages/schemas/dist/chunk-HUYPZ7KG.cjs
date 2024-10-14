"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateInputSchema = _zod.z.object({
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tasks: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
var ToDoListUpdateInputSchema_default = ToDoListUpdateInputSchema;




exports.ToDoListUpdateInputSchema = ToDoListUpdateInputSchema; exports.ToDoListUpdateInputSchema_default = ToDoListUpdateInputSchema_default;
//# sourceMappingURL=chunk-HUYPZ7KG.cjs.map