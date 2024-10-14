"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBBQYWLSJcjs = require('./chunk-BBQYWLSJ.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk2NESXYC2cjs = require('./chunk-2NESXYC2.cjs');

// src/database/outputTypeSchemas/KanbanFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var KanbanSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  lists: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanListFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2NESXYC2cjs.KanbanCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanbanFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: KanbanSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanbanIncludeSchema.optional(),
  where: _chunkBBQYWLSJcjs.KanbanWhereUniqueInputSchema
}).strict();
var KanbanFindUniqueOrThrowArgsSchema_default = KanbanFindUniqueOrThrowArgsSchema;





exports.KanbanSelectSchema = KanbanSelectSchema; exports.KanbanFindUniqueOrThrowArgsSchema = KanbanFindUniqueOrThrowArgsSchema; exports.KanbanFindUniqueOrThrowArgsSchema_default = KanbanFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-P2VZLTTZ.cjs.map