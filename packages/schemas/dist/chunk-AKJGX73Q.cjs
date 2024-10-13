"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkG2ILON2Scjs = require('./chunk-G2ILON2S.cjs');

// src/database/inputTypeSchemas/TimePeriodCreateInputSchema.ts
var _zod = require('zod');
var TimePeriodCreateInputSchema = _zod.z.object({
  start: _zod.z.coerce.date().optional(),
  end: _zod.z.coerce.date().optional().nullable(),
  Diet: _zod.z.lazy(() => _chunkG2ILON2Scjs.DietCreateNestedOneWithoutPeriodsFollowedInputSchema).optional()
}).strict();
var TimePeriodCreateInputSchema_default = TimePeriodCreateInputSchema;




exports.TimePeriodCreateInputSchema = TimePeriodCreateInputSchema; exports.TimePeriodCreateInputSchema_default = TimePeriodCreateInputSchema_default;
//# sourceMappingURL=chunk-AKJGX73Q.cjs.map