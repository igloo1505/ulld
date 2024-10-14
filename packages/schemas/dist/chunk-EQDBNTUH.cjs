"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');


var _chunkEOB53DGHcjs = require('./chunk-EOB53DGH.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/DietaryItemAggregateArgsSchema.ts
var _zod = require('zod');
var DietaryItemAggregateArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkEOB53DGHcjs.DietaryItemOrderByWithRelationInputSchema.array(), _chunkEOB53DGHcjs.DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietaryItemAggregateArgsSchema_default = DietaryItemAggregateArgsSchema;




exports.DietaryItemAggregateArgsSchema = DietaryItemAggregateArgsSchema; exports.DietaryItemAggregateArgsSchema_default = DietaryItemAggregateArgsSchema_default;
//# sourceMappingURL=chunk-EQDBNTUH.cjs.map