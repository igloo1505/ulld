"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBBQYWLSJcjs = require('./chunk-BBQYWLSJ.cjs');


var _chunkAYLQOMLKcjs = require('./chunk-AYLQOMLK.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanbanAggregateArgsSchema.ts
var _zod = require('zod');
var KanbanAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.KanbanWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkAYLQOMLKcjs.KanbanOrderByWithRelationInputSchema.array(), _chunkAYLQOMLKcjs.KanbanOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkBBQYWLSJcjs.KanbanWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanbanAggregateArgsSchema_default = KanbanAggregateArgsSchema;




exports.KanbanAggregateArgsSchema = KanbanAggregateArgsSchema; exports.KanbanAggregateArgsSchema_default = KanbanAggregateArgsSchema_default;
//# sourceMappingURL=chunk-FYIPZG7B.cjs.map