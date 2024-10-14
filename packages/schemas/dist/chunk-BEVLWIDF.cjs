"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5GS3KPYDcjs = require('./chunk-5GS3KPYD.cjs');


var _chunkQDGJ5TODcjs = require('./chunk-QDGJ5TOD.cjs');


var _chunkO7Q663UDcjs = require('./chunk-O7Q663UD.cjs');


var _chunkTF4BVAOLcjs = require('./chunk-TF4BVAOL.cjs');


var _chunkBBQYWLSJcjs = require('./chunk-BBQYWLSJ.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk2NESXYC2cjs = require('./chunk-2NESXYC2.cjs');

// src/database/outputTypeSchemas/KanbanUpsertArgsSchema.ts
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
var KanbanUpsertArgsSchema = _zod.z.object({
  select: KanbanSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanbanIncludeSchema.optional(),
  where: _chunkBBQYWLSJcjs.KanbanWhereUniqueInputSchema,
  create: _zod.z.union([_chunk5GS3KPYDcjs.KanbanCreateInputSchema, _chunkQDGJ5TODcjs.KanbanUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkTF4BVAOLcjs.KanbanUpdateInputSchema, _chunkO7Q663UDcjs.KanbanUncheckedUpdateInputSchema])
}).strict();
var KanbanUpsertArgsSchema_default = KanbanUpsertArgsSchema;





exports.KanbanSelectSchema = KanbanSelectSchema; exports.KanbanUpsertArgsSchema = KanbanUpsertArgsSchema; exports.KanbanUpsertArgsSchema_default = KanbanUpsertArgsSchema_default;
//# sourceMappingURL=chunk-BEVLWIDF.cjs.map