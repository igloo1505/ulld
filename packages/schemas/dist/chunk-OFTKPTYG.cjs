"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYYCSRMLVcjs = require('./chunk-YYCSRMLV.cjs');


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');

// src/database/outputTypeSchemas/TimePeriodArgsSchema.ts
var _zod = require('zod');
var TimePeriodArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkYYCSRMLVcjs.TimePeriodSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunkMWW6FNG3cjs.TimePeriodIncludeSchema).optional()
}).strict();
var TimePeriodArgsSchema_default = TimePeriodArgsSchema;




exports.TimePeriodArgsSchema = TimePeriodArgsSchema; exports.TimePeriodArgsSchema_default = TimePeriodArgsSchema_default;
//# sourceMappingURL=chunk-OFTKPTYG.cjs.map