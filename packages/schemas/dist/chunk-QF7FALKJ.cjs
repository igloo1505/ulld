"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/KanbanUncheckedCreateWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUncheckedCreateWithoutListsInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanUncheckedCreateWithoutListsInputSchema_default = KanbanUncheckedCreateWithoutListsInputSchema;




exports.KanbanUncheckedCreateWithoutListsInputSchema = KanbanUncheckedCreateWithoutListsInputSchema; exports.KanbanUncheckedCreateWithoutListsInputSchema_default = KanbanUncheckedCreateWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-QF7FALKJ.cjs.map