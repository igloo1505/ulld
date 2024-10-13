"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUMJSYVHXcjs = require('./chunk-UMJSYVHX.cjs');


var _chunk7AYYY72Xcjs = require('./chunk-7AYYY72X.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanbanAggregateArgsSchema.ts
var _zod = require('zod');
var KanbanAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.KanbanWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk7AYYY72Xcjs.KanbanOrderByWithRelationInputSchema.array(), _chunk7AYYY72Xcjs.KanbanOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkUMJSYVHXcjs.KanbanWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanbanAggregateArgsSchema_default = KanbanAggregateArgsSchema;




exports.KanbanAggregateArgsSchema = KanbanAggregateArgsSchema; exports.KanbanAggregateArgsSchema_default = KanbanAggregateArgsSchema_default;
//# sourceMappingURL=chunk-UK3TXQDD.cjs.map