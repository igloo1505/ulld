"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');


var _chunkD2DFTU2Wcjs = require('./chunk-D2DFTU2W.cjs');

// src/database/inputTypeSchemas/KanbanCreateInputSchema.ts
var _zod = require('zod');
var KanbanCreateInputSchema = _zod.z.object({
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lists: _zod.z.lazy(() => _chunkD2DFTU2Wcjs.KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanCreateInputSchema_default = KanbanCreateInputSchema;




exports.KanbanCreateInputSchema = KanbanCreateInputSchema; exports.KanbanCreateInputSchema_default = KanbanCreateInputSchema_default;
//# sourceMappingURL=chunk-5GS3KPYD.cjs.map