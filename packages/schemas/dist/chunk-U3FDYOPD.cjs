"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC53BY72Mcjs = require('./chunk-C53BY72M.cjs');


var _chunkLBNBMFF6cjs = require('./chunk-LBNBMFF6.cjs');


var _chunkWWY7CLMScjs = require('./chunk-WWY7CLMS.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/DietaryItemGroupByArgsSchema.ts
var _zod = require('zod');
var DietaryItemGroupByArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkLBNBMFF6cjs.DietaryItemOrderByWithAggregationInputSchema.array(), _chunkLBNBMFF6cjs.DietaryItemOrderByWithAggregationInputSchema]).optional(),
  by: _chunkWWY7CLMScjs.DietaryItemScalarFieldEnumSchema.array(),
  having: _chunkC53BY72Mcjs.DietaryItemScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietaryItemGroupByArgsSchema_default = DietaryItemGroupByArgsSchema;




exports.DietaryItemGroupByArgsSchema = DietaryItemGroupByArgsSchema; exports.DietaryItemGroupByArgsSchema_default = DietaryItemGroupByArgsSchema_default;
//# sourceMappingURL=chunk-U3FDYOPD.cjs.map