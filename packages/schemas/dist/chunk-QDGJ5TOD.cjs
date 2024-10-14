"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');


var _chunkWUO44GQBcjs = require('./chunk-WUO44GQB.cjs');

// src/database/inputTypeSchemas/KanbanUncheckedCreateInputSchema.ts
var _zod = require('zod');
var KanbanUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lists: _zod.z.lazy(() => _chunkWUO44GQBcjs.KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanUncheckedCreateInputSchema_default = KanbanUncheckedCreateInputSchema;




exports.KanbanUncheckedCreateInputSchema = KanbanUncheckedCreateInputSchema; exports.KanbanUncheckedCreateInputSchema_default = KanbanUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-QDGJ5TOD.cjs.map