"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5GS3KPYDcjs = require('./chunk-5GS3KPYD.cjs');


var _chunkQDGJ5TODcjs = require('./chunk-QDGJ5TOD.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk2NESXYC2cjs = require('./chunk-2NESXYC2.cjs');

// src/database/outputTypeSchemas/KanbanCreateArgsSchema.ts
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
var KanbanCreateArgsSchema = _zod.z.object({
  select: KanbanSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanbanIncludeSchema.optional(),
  data: _zod.z.union([_chunk5GS3KPYDcjs.KanbanCreateInputSchema, _chunkQDGJ5TODcjs.KanbanUncheckedCreateInputSchema])
}).strict();
var KanbanCreateArgsSchema_default = KanbanCreateArgsSchema;





exports.KanbanSelectSchema = KanbanSelectSchema; exports.KanbanCreateArgsSchema = KanbanCreateArgsSchema; exports.KanbanCreateArgsSchema_default = KanbanCreateArgsSchema_default;
//# sourceMappingURL=chunk-SX3A2GSF.cjs.map