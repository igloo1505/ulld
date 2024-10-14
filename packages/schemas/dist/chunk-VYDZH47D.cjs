"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHLVBK6SZcjs = require('./chunk-HLVBK6SZ.cjs');


var _chunkN4EZ2XK7cjs = require('./chunk-N4EZ2XK7.cjs');


var _chunkDGG7BHZVcjs = require('./chunk-DGG7BHZV.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/HealthReportGroupByArgsSchema.ts
var _zod = require('zod');
var HealthReportGroupByArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.HealthReportWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkHLVBK6SZcjs.HealthReportOrderByWithAggregationInputSchema.array(), _chunkHLVBK6SZcjs.HealthReportOrderByWithAggregationInputSchema]).optional(),
  by: _chunkDGG7BHZVcjs.HealthReportScalarFieldEnumSchema.array(),
  having: _chunkN4EZ2XK7cjs.HealthReportScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var HealthReportGroupByArgsSchema_default = HealthReportGroupByArgsSchema;




exports.HealthReportGroupByArgsSchema = HealthReportGroupByArgsSchema; exports.HealthReportGroupByArgsSchema_default = HealthReportGroupByArgsSchema_default;
//# sourceMappingURL=chunk-VYDZH47D.cjs.map