"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkT367P7WKcjs = require('./chunk-T367P7WK.cjs');


var _chunkBTGLCYBUcjs = require('./chunk-BTGLCYBU.cjs');


var _chunk3FK2D6UKcjs = require('./chunk-3FK2D6UK.cjs');


var _chunkTWUCMDZDcjs = require('./chunk-TWUCMDZD.cjs');


var _chunkUMJSYVHXcjs = require('./chunk-UMJSYVHX.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkVGUAF6L3cjs = require('./chunk-VGUAF6L3.cjs');

// src/database/outputTypeSchemas/KanbanUpsertArgsSchema.ts
var _zod = require('zod');
var KanbanSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  lists: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanBanListFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkVGUAF6L3cjs.KanbanCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanbanUpsertArgsSchema = _zod.z.object({
  select: KanbanSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanbanIncludeSchema.optional(),
  where: _chunkUMJSYVHXcjs.KanbanWhereUniqueInputSchema,
  create: _zod.z.union([_chunkT367P7WKcjs.KanbanCreateInputSchema, _chunkBTGLCYBUcjs.KanbanUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkTWUCMDZDcjs.KanbanUpdateInputSchema, _chunk3FK2D6UKcjs.KanbanUncheckedUpdateInputSchema])
}).strict();
var KanbanUpsertArgsSchema_default = KanbanUpsertArgsSchema;





exports.KanbanSelectSchema = KanbanSelectSchema; exports.KanbanUpsertArgsSchema = KanbanUpsertArgsSchema; exports.KanbanUpsertArgsSchema_default = KanbanUpsertArgsSchema_default;
//# sourceMappingURL=chunk-2QAL4WRR.cjs.map