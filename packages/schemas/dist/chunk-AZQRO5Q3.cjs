"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TimePeriodCreateWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodCreateWithoutDietInputSchema = _zod.z.object({
  start: _zod.z.coerce.date().optional(),
  end: _zod.z.coerce.date().optional().nullable()
}).strict();
var TimePeriodCreateWithoutDietInputSchema_default = TimePeriodCreateWithoutDietInputSchema;




exports.TimePeriodCreateWithoutDietInputSchema = TimePeriodCreateWithoutDietInputSchema; exports.TimePeriodCreateWithoutDietInputSchema_default = TimePeriodCreateWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-AZQRO5Q3.cjs.map