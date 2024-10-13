"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TimePeriodCreateManyDietInputSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyDietInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  start: _zod.z.coerce.date().optional(),
  end: _zod.z.coerce.date().optional().nullable()
}).strict();
var TimePeriodCreateManyDietInputSchema_default = TimePeriodCreateManyDietInputSchema;




exports.TimePeriodCreateManyDietInputSchema = TimePeriodCreateManyDietInputSchema; exports.TimePeriodCreateManyDietInputSchema_default = TimePeriodCreateManyDietInputSchema_default;
//# sourceMappingURL=chunk-QKVTJZNF.cjs.map