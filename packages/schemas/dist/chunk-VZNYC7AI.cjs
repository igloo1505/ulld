"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNN2554HUcjs = require('./chunk-NN2554HU.cjs');


var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');


var _chunkZOSYZ5FXcjs = require('./chunk-ZOSYZ5FX.cjs');

// src/database/outputTypeSchemas/RandomImageAggregateArgsSchema.ts
var _zod = require('zod');
var RandomImageAggregateArgsSchema = _zod.z.object({
  where: _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNN2554HUcjs.RandomImageOrderByWithRelationInputSchema.array(), _chunkNN2554HUcjs.RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RandomImageAggregateArgsSchema_default = RandomImageAggregateArgsSchema;




exports.RandomImageAggregateArgsSchema = RandomImageAggregateArgsSchema; exports.RandomImageAggregateArgsSchema_default = RandomImageAggregateArgsSchema_default;
//# sourceMappingURL=chunk-VZNYC7AI.cjs.map