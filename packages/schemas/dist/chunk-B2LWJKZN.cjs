"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZLE6H6QCcjs = require('./chunk-ZLE6H6QC.cjs');


var _chunk3ZQVKIXXcjs = require('./chunk-3ZQVKIXX.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/HealthReportAggregateArgsSchema.ts
var _zod = require('zod');
var HealthReportAggregateArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.HealthReportWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZLE6H6QCcjs.HealthReportOrderByWithRelationInputSchema.array(), _chunkZLE6H6QCcjs.HealthReportOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk3ZQVKIXXcjs.HealthReportWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var HealthReportAggregateArgsSchema_default = HealthReportAggregateArgsSchema;




exports.HealthReportAggregateArgsSchema = HealthReportAggregateArgsSchema; exports.HealthReportAggregateArgsSchema_default = HealthReportAggregateArgsSchema_default;
//# sourceMappingURL=chunk-B2LWJKZN.cjs.map