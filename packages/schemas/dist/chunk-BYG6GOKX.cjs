"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6S4ODG4Fcjs = require('./chunk-6S4ODG4F.cjs');


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/outputTypeSchemas/TimePeriodArgsSchema.ts
var _zod = require('zod');
var TimePeriodArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk6S4ODG4Fcjs.TimePeriodSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunkN2ITDNOTcjs.TimePeriodIncludeSchema).optional()
}).strict();
var TimePeriodArgsSchema_default = TimePeriodArgsSchema;




exports.TimePeriodArgsSchema = TimePeriodArgsSchema; exports.TimePeriodArgsSchema_default = TimePeriodArgsSchema_default;
//# sourceMappingURL=chunk-BYG6GOKX.cjs.map