"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkDPK6VU7Ccjs = require('./chunk-DPK6VU7C.cjs');

// src/database/inputTypeSchemas/KanbanUncheckedCreateInputSchema.ts
var _zod = require('zod');
var KanbanUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lists: _zod.z.lazy(() => _chunkDPK6VU7Ccjs.KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanUncheckedCreateInputSchema_default = KanbanUncheckedCreateInputSchema;




exports.KanbanUncheckedCreateInputSchema = KanbanUncheckedCreateInputSchema; exports.KanbanUncheckedCreateInputSchema_default = KanbanUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-BTGLCYBU.cjs.map