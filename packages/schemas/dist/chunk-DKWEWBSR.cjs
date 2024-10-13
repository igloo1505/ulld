"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJGVO2HUKcjs = require('./chunk-JGVO2HUK.cjs');


var _chunkZAB4PI5Mcjs = require('./chunk-ZAB4PI5M.cjs');


var _chunkQFJ32QPIcjs = require('./chunk-QFJ32QPI.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/HealthReportGroupByArgsSchema.ts
var _zod = require('zod');
var HealthReportGroupByArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.HealthReportWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkJGVO2HUKcjs.HealthReportOrderByWithAggregationInputSchema.array(), _chunkJGVO2HUKcjs.HealthReportOrderByWithAggregationInputSchema]).optional(),
  by: _chunkQFJ32QPIcjs.HealthReportScalarFieldEnumSchema.array(),
  having: _chunkZAB4PI5Mcjs.HealthReportScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var HealthReportGroupByArgsSchema_default = HealthReportGroupByArgsSchema;




exports.HealthReportGroupByArgsSchema = HealthReportGroupByArgsSchema; exports.HealthReportGroupByArgsSchema_default = HealthReportGroupByArgsSchema_default;
//# sourceMappingURL=chunk-DKWEWBSR.cjs.map