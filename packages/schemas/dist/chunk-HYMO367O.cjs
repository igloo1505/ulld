"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5KNFAWZCcjs = require('./chunk-5KNFAWZC.cjs');


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');

// src/database/outputTypeSchemas/HealthReportArgsSchema.ts
var _zod = require('zod');
var HealthReportArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk5KNFAWZCcjs.HealthReportSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunkMWW6FNG3cjs.HealthReportIncludeSchema).optional()
}).strict();
var HealthReportArgsSchema_default = HealthReportArgsSchema;




exports.HealthReportArgsSchema = HealthReportArgsSchema; exports.HealthReportArgsSchema_default = HealthReportArgsSchema_default;
//# sourceMappingURL=chunk-HYMO367O.cjs.map