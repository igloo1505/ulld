"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNCGFRGWCcjs = require('./chunk-NCGFRGWC.cjs');

// src/database/outputTypeSchemas/HealthReportCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var HealthReportCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNCGFRGWCcjs.HealthReportCreateManyInputSchema, _chunkNCGFRGWCcjs.HealthReportCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var HealthReportCreateManyAndReturnArgsSchema_default = HealthReportCreateManyAndReturnArgsSchema;




exports.HealthReportCreateManyAndReturnArgsSchema = HealthReportCreateManyAndReturnArgsSchema; exports.HealthReportCreateManyAndReturnArgsSchema_default = HealthReportCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-7NOR7Z4R.cjs.map