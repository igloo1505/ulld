"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/KanbanCreateWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanCreateWithoutListsInputSchema = _zod.z.object({
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanCreateWithoutListsInputSchema_default = KanbanCreateWithoutListsInputSchema;




exports.KanbanCreateWithoutListsInputSchema = KanbanCreateWithoutListsInputSchema; exports.KanbanCreateWithoutListsInputSchema_default = KanbanCreateWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-E4P7X2HK.cjs.map