"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/KanbanWhereUniqueInputSchema.ts
var _zod = require('zod');
var KanbanWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema).array()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lists: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional()
}).strict());
var KanbanWhereUniqueInputSchema_default = KanbanWhereUniqueInputSchema;




exports.KanbanWhereUniqueInputSchema = KanbanWhereUniqueInputSchema; exports.KanbanWhereUniqueInputSchema_default = KanbanWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-BBQYWLSJ.cjs.map