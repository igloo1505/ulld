"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkM2TDEEYKcjs = require('./chunk-M2TDEEYK.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/TimePeriodAggregateArgsSchema.ts
var _zod = require('zod');
var TimePeriodAggregateArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkM2TDEEYKcjs.TimePeriodOrderByWithRelationInputSchema.array(), _chunkM2TDEEYKcjs.TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TimePeriodAggregateArgsSchema_default = TimePeriodAggregateArgsSchema;




exports.TimePeriodAggregateArgsSchema = TimePeriodAggregateArgsSchema; exports.TimePeriodAggregateArgsSchema_default = TimePeriodAggregateArgsSchema_default;
//# sourceMappingURL=chunk-YNZVF6T4.cjs.map