"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/KanbanUpdateWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUpdateWithoutListsInputSchema = _zod.z.object({
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUpdateWithoutListsInputSchema_default = KanbanUpdateWithoutListsInputSchema;




exports.KanbanUpdateWithoutListsInputSchema = KanbanUpdateWithoutListsInputSchema; exports.KanbanUpdateWithoutListsInputSchema_default = KanbanUpdateWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-SJYOKQRI.cjs.map