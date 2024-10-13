"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDJGN4EZXcjs = require('./chunk-DJGN4EZX.cjs');


var _chunk3BGCPR2Lcjs = require('./chunk-3BGCPR2L.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ToDoListAggregateArgsSchema.ts
var _zod = require('zod');
var ToDoListAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.ToDoListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk3BGCPR2Lcjs.ToDoListOrderByWithRelationInputSchema.array(), _chunk3BGCPR2Lcjs.ToDoListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDJGN4EZXcjs.ToDoListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoListAggregateArgsSchema_default = ToDoListAggregateArgsSchema;




exports.ToDoListAggregateArgsSchema = ToDoListAggregateArgsSchema; exports.ToDoListAggregateArgsSchema_default = ToDoListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-YDMDLUUS.cjs.map