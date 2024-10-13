"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/KanbanWhereUniqueInputSchema.ts
var _zod = require('zod');
var KanbanWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema).array()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lists: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional()
}).strict());
var KanbanWhereUniqueInputSchema_default = KanbanWhereUniqueInputSchema;




exports.KanbanWhereUniqueInputSchema = KanbanWhereUniqueInputSchema; exports.KanbanWhereUniqueInputSchema_default = KanbanWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-UMJSYVHX.cjs.map