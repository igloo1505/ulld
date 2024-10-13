"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTGS2ITNAcjs = require('./chunk-TGS2ITNA.cjs');

// src/database/outputTypeSchemas/HealthReportCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var HealthReportCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTGS2ITNAcjs.HealthReportCreateManyInputSchema, _chunkTGS2ITNAcjs.HealthReportCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var HealthReportCreateManyAndReturnArgsSchema_default = HealthReportCreateManyAndReturnArgsSchema;




exports.HealthReportCreateManyAndReturnArgsSchema = HealthReportCreateManyAndReturnArgsSchema; exports.HealthReportCreateManyAndReturnArgsSchema_default = HealthReportCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-7XULS5EA.cjs.map