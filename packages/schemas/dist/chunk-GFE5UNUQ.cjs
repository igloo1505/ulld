"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF5R7ACEYcjs = require('./chunk-F5R7ACEY.cjs');


var _chunkUMJSYVHXcjs = require('./chunk-UMJSYVHX.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkVGUAF6L3cjs = require('./chunk-VGUAF6L3.cjs');


var _chunk7AYYY72Xcjs = require('./chunk-7AYYY72X.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanbanFindFirstOrThrowArgsSchema.ts
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
var KanbanFindFirstOrThrowArgsSchema = _zod.z.object({
  select: KanbanSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanbanIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.KanbanWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk7AYYY72Xcjs.KanbanOrderByWithRelationInputSchema.array(), _chunk7AYYY72Xcjs.KanbanOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkUMJSYVHXcjs.KanbanWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkF5R7ACEYcjs.KanbanScalarFieldEnumSchema, _chunkF5R7ACEYcjs.KanbanScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanbanFindFirstOrThrowArgsSchema_default = KanbanFindFirstOrThrowArgsSchema;





exports.KanbanSelectSchema = KanbanSelectSchema; exports.KanbanFindFirstOrThrowArgsSchema = KanbanFindFirstOrThrowArgsSchema; exports.KanbanFindFirstOrThrowArgsSchema_default = KanbanFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-GFE5UNUQ.cjs.map