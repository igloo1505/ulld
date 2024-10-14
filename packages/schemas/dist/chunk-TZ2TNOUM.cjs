"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HJTH7WMcjs = require('./chunk-4HJTH7WM.cjs');


var _chunkBBQYWLSJcjs = require('./chunk-BBQYWLSJ.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk2NESXYC2cjs = require('./chunk-2NESXYC2.cjs');


var _chunkAYLQOMLKcjs = require('./chunk-AYLQOMLK.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanbanFindManyArgsSchema.ts
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
var KanbanFindManyArgsSchema = _zod.z.object({
  select: KanbanSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanbanIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.KanbanWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkAYLQOMLKcjs.KanbanOrderByWithRelationInputSchema.array(), _chunkAYLQOMLKcjs.KanbanOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkBBQYWLSJcjs.KanbanWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk4HJTH7WMcjs.KanbanScalarFieldEnumSchema, _chunk4HJTH7WMcjs.KanbanScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanbanFindManyArgsSchema_default = KanbanFindManyArgsSchema;





exports.KanbanSelectSchema = KanbanSelectSchema; exports.KanbanFindManyArgsSchema = KanbanFindManyArgsSchema; exports.KanbanFindManyArgsSchema_default = KanbanFindManyArgsSchema_default;
//# sourceMappingURL=chunk-TZ2TNOUM.cjs.map