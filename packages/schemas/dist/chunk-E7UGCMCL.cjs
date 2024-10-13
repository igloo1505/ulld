"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYNNTJ7QVcjs = require('./chunk-YNNTJ7QV.cjs');


var _chunkNAPXQQJ3cjs = require('./chunk-NAPXQQJ3.cjs');


var _chunk3A457F5Ucjs = require('./chunk-3A457F5U.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema.ts
var _zod = require('zod');
var ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  task: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  dueAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk3A457F5Ucjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  parentId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema), _zod.z.lazy(() => _chunkYNNTJ7QVcjs.NullableEnumTaskCategoryFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  status: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  priority: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  toDoListId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  completedOn: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk3A457F5Ucjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema_default = ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema;




exports.ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema = ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema; exports.ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema_default = ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema_default;
//# sourceMappingURL=chunk-E7UGCMCL.cjs.map