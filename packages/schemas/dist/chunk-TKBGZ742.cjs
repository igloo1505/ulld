"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX46GGGDGcjs = require('./chunk-X46GGGDG.cjs');


var _chunkU4G24S5Bcjs = require('./chunk-U4G24S5B.cjs');


var _chunk37OY2UWRcjs = require('./chunk-37OY2UWR.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/TimePeriodGroupByArgsSchema.ts
var _zod = require('zod');
var TimePeriodGroupByArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkU4G24S5Bcjs.TimePeriodOrderByWithAggregationInputSchema.array(), _chunkU4G24S5Bcjs.TimePeriodOrderByWithAggregationInputSchema]).optional(),
  by: _chunk37OY2UWRcjs.TimePeriodScalarFieldEnumSchema.array(),
  having: _chunkX46GGGDGcjs.TimePeriodScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TimePeriodGroupByArgsSchema_default = TimePeriodGroupByArgsSchema;




exports.TimePeriodGroupByArgsSchema = TimePeriodGroupByArgsSchema; exports.TimePeriodGroupByArgsSchema_default = TimePeriodGroupByArgsSchema_default;
//# sourceMappingURL=chunk-TKBGZ742.cjs.map