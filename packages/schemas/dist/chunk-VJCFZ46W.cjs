"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUMJSYVHXcjs = require('./chunk-UMJSYVHX.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkVGUAF6L3cjs = require('./chunk-VGUAF6L3.cjs');

// src/database/outputTypeSchemas/KanbanFindUniqueOrThrowArgsSchema.ts
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
var KanbanFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: KanbanSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanbanIncludeSchema.optional(),
  where: _chunkUMJSYVHXcjs.KanbanWhereUniqueInputSchema
}).strict();
var KanbanFindUniqueOrThrowArgsSchema_default = KanbanFindUniqueOrThrowArgsSchema;





exports.KanbanSelectSchema = KanbanSelectSchema; exports.KanbanFindUniqueOrThrowArgsSchema = KanbanFindUniqueOrThrowArgsSchema; exports.KanbanFindUniqueOrThrowArgsSchema_default = KanbanFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-VJCFZ46W.cjs.map