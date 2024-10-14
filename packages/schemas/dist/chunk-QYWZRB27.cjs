"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMTW27OMHcjs = require('./chunk-MTW27OMH.cjs');


var _chunk5FRKEV65cjs = require('./chunk-5FRKEV65.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/HealthReportUpdateManyArgsSchema.ts
var _zod = require('zod');
var HealthReportUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk5FRKEV65cjs.HealthReportUpdateManyMutationInputSchema, _chunkMTW27OMHcjs.HealthReportUncheckedUpdateManyInputSchema]),
  where: _chunkZGGHUMG7cjs.HealthReportWhereInputSchema.optional()
}).strict();
var HealthReportUpdateManyArgsSchema_default = HealthReportUpdateManyArgsSchema;




exports.HealthReportUpdateManyArgsSchema = HealthReportUpdateManyArgsSchema; exports.HealthReportUpdateManyArgsSchema_default = HealthReportUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-QYWZRB27.cjs.map