"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVB5SDYGQcjs = require('./chunk-VB5SDYGQ.cjs');


var _chunkCUJGY6WBcjs = require('./chunk-CUJGY6WB.cjs');


var _chunkEEBSLQOJcjs = require('./chunk-EEBSLQOJ.cjs');

// src/database/outputTypeSchemas/DailyFocusAggregateArgsSchema.ts
var _zod = require('zod');
var DailyFocusAggregateArgsSchema = _zod.z.object({
  where: _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkVB5SDYGQcjs.DailyFocusOrderByWithRelationInputSchema.array(), _chunkVB5SDYGQcjs.DailyFocusOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkCUJGY6WBcjs.DailyFocusWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DailyFocusAggregateArgsSchema_default = DailyFocusAggregateArgsSchema;




exports.DailyFocusAggregateArgsSchema = DailyFocusAggregateArgsSchema; exports.DailyFocusAggregateArgsSchema_default = DailyFocusAggregateArgsSchema_default;
//# sourceMappingURL=chunk-TZBXXWZ6.cjs.map