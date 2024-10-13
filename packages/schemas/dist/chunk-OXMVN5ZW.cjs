"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TimePeriodUncheckedCreateWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUncheckedCreateWithoutDietInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  start: _zod.z.coerce.date().optional(),
  end: _zod.z.coerce.date().optional().nullable()
}).strict();
var TimePeriodUncheckedCreateWithoutDietInputSchema_default = TimePeriodUncheckedCreateWithoutDietInputSchema;




exports.TimePeriodUncheckedCreateWithoutDietInputSchema = TimePeriodUncheckedCreateWithoutDietInputSchema; exports.TimePeriodUncheckedCreateWithoutDietInputSchema_default = TimePeriodUncheckedCreateWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-OXMVN5ZW.cjs.map