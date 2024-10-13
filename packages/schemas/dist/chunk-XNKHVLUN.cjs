"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK2WW5VSZcjs = require('./chunk-K2WW5VSZ.cjs');


var _chunkR6KSQQWNcjs = require('./chunk-R6KSQQWN.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/HealthReportUpdateManyArgsSchema.ts
var _zod = require('zod');
var HealthReportUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkR6KSQQWNcjs.HealthReportUpdateManyMutationInputSchema, _chunkK2WW5VSZcjs.HealthReportUncheckedUpdateManyInputSchema]),
  where: _chunk4QJOIHDOcjs.HealthReportWhereInputSchema.optional()
}).strict();
var HealthReportUpdateManyArgsSchema_default = HealthReportUpdateManyArgsSchema;




exports.HealthReportUpdateManyArgsSchema = HealthReportUpdateManyArgsSchema; exports.HealthReportUpdateManyArgsSchema_default = HealthReportUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-XNKHVLUN.cjs.map