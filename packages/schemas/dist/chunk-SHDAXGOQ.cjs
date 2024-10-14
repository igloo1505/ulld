"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkG3GSQGN6cjs = require('./chunk-G3GSQGN6.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/HealthReportAggregateArgsSchema.ts
var _zod = require('zod');
var HealthReportAggregateArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.HealthReportWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkG3GSQGN6cjs.HealthReportOrderByWithRelationInputSchema.array(), _chunkG3GSQGN6cjs.HealthReportOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var HealthReportAggregateArgsSchema_default = HealthReportAggregateArgsSchema;




exports.HealthReportAggregateArgsSchema = HealthReportAggregateArgsSchema; exports.HealthReportAggregateArgsSchema_default = HealthReportAggregateArgsSchema_default;
//# sourceMappingURL=chunk-SHDAXGOQ.cjs.map