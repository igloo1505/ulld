"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/KanbanCreateWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanCreateWithoutListsInputSchema = _zod.z.object({
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanCreateWithoutListsInputSchema_default = KanbanCreateWithoutListsInputSchema;




exports.KanbanCreateWithoutListsInputSchema = KanbanCreateWithoutListsInputSchema; exports.KanbanCreateWithoutListsInputSchema_default = KanbanCreateWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-BLNJLJTO.cjs.map