"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkTVVQ25TTcjs = require('./chunk-TVVQ25TT.cjs');

// src/database/inputTypeSchemas/KanbanCreateInputSchema.ts
var _zod = require('zod');
var KanbanCreateInputSchema = _zod.z.object({
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lists: _zod.z.lazy(() => _chunkTVVQ25TTcjs.KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanCreateInputSchema_default = KanbanCreateInputSchema;




exports.KanbanCreateInputSchema = KanbanCreateInputSchema; exports.KanbanCreateInputSchema_default = KanbanCreateInputSchema_default;
//# sourceMappingURL=chunk-T367P7WK.cjs.map