"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/KanbanUncheckedUpdateWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUncheckedUpdateWithoutListsInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUncheckedUpdateWithoutListsInputSchema_default = KanbanUncheckedUpdateWithoutListsInputSchema;




exports.KanbanUncheckedUpdateWithoutListsInputSchema = KanbanUncheckedUpdateWithoutListsInputSchema; exports.KanbanUncheckedUpdateWithoutListsInputSchema_default = KanbanUncheckedUpdateWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-TZB4RC6D.cjs.map