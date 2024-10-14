"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkERMGMX62cjs = require('./chunk-ERMGMX62.cjs');

// src/database/inputTypeSchemas/TimePeriodCreateInputSchema.ts
var _zod = require('zod');
var TimePeriodCreateInputSchema = _zod.z.object({
  start: _zod.z.coerce.date().optional(),
  end: _zod.z.coerce.date().optional().nullable(),
  Diet: _zod.z.lazy(() => _chunkERMGMX62cjs.DietCreateNestedOneWithoutPeriodsFollowedInputSchema).optional()
}).strict();
var TimePeriodCreateInputSchema_default = TimePeriodCreateInputSchema;




exports.TimePeriodCreateInputSchema = TimePeriodCreateInputSchema; exports.TimePeriodCreateInputSchema_default = TimePeriodCreateInputSchema_default;
//# sourceMappingURL=chunk-GTAHTKQV.cjs.map