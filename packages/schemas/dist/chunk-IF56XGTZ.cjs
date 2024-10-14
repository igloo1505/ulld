"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNCGFRGWCcjs = require('./chunk-NCGFRGWC.cjs');

// src/database/outputTypeSchemas/HealthReportCreateManyArgsSchema.ts
var _zod = require('zod');
var HealthReportCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNCGFRGWCcjs.HealthReportCreateManyInputSchema, _chunkNCGFRGWCcjs.HealthReportCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var HealthReportCreateManyArgsSchema_default = HealthReportCreateManyArgsSchema;




exports.HealthReportCreateManyArgsSchema = HealthReportCreateManyArgsSchema; exports.HealthReportCreateManyArgsSchema_default = HealthReportCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-IF56XGTZ.cjs.map