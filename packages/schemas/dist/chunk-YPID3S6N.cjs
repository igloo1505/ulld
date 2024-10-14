"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXKUAIKZKcjs = require('./chunk-XKUAIKZK.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/ServingAggregateArgsSchema.ts
var _zod = require('zod');
var ServingAggregateArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.ServingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXKUAIKZKcjs.ServingOrderByWithRelationInputSchema.array(), _chunkXKUAIKZKcjs.ServingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ServingAggregateArgsSchema_default = ServingAggregateArgsSchema;




exports.ServingAggregateArgsSchema = ServingAggregateArgsSchema; exports.ServingAggregateArgsSchema_default = ServingAggregateArgsSchema_default;
//# sourceMappingURL=chunk-YPID3S6N.cjs.map