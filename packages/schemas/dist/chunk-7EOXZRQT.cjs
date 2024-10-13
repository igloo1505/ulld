"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk22Z6UJCQcjs = require('./chunk-22Z6UJCQ.cjs');


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/outputTypeSchemas/HealthReportArgsSchema.ts
var _zod = require('zod');
var HealthReportArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk22Z6UJCQcjs.HealthReportSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunkN2ITDNOTcjs.HealthReportIncludeSchema).optional()
}).strict();
var HealthReportArgsSchema_default = HealthReportArgsSchema;




exports.HealthReportArgsSchema = HealthReportArgsSchema; exports.HealthReportArgsSchema_default = HealthReportArgsSchema_default;
//# sourceMappingURL=chunk-7EOXZRQT.cjs.map