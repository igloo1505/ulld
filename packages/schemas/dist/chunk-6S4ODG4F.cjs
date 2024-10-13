"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/inputTypeSchemas/TimePeriodSelectSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodSelectSchema_default = TimePeriodSelectSchema;




exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodSelectSchema_default = TimePeriodSelectSchema_default;
//# sourceMappingURL=chunk-6S4ODG4F.cjs.map