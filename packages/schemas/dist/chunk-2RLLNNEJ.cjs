"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkZSO5RIVNcjs = require('./chunk-ZSO5RIVN.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkQURZBTO7cjs = require('./chunk-QURZBTO7.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/ToDoUpdateInputSchema.ts
var _zod = require('zod');
var ToDoUpdateInputSchema = _zod.z.object({
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  task: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  dueAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema), _zod.z.lazy(() => _chunkZSO5RIVNcjs.NullableEnumTaskCategoryFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  status: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  priority: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  completedOn: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUpdateManyWithoutToDoNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUpdateManyWithoutToDoNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUpdateManyWithoutToDoNestedInputSchema).optional(),
  parent: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUpdateOneWithoutChildNestedInputSchema).optional(),
  child: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUpdateManyWithoutParentNestedInputSchema).optional(),
  ToDoList: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoListUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();
var ToDoUpdateInputSchema_default = ToDoUpdateInputSchema;




exports.ToDoUpdateInputSchema = ToDoUpdateInputSchema; exports.ToDoUpdateInputSchema_default = ToDoUpdateInputSchema_default;
//# sourceMappingURL=chunk-2RLLNNEJ.cjs.map