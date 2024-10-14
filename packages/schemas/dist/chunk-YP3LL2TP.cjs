"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TimePeriodUncheckedCreateInputSchema.ts
var _zod = require('zod');
var TimePeriodUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  start: _zod.z.coerce.date().optional(),
  end: _zod.z.coerce.date().optional().nullable(),
  dietId: _zod.z.string().optional().nullable()
}).strict();
var TimePeriodUncheckedCreateInputSchema_default = TimePeriodUncheckedCreateInputSchema;




exports.TimePeriodUncheckedCreateInputSchema = TimePeriodUncheckedCreateInputSchema; exports.TimePeriodUncheckedCreateInputSchema_default = TimePeriodUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-YP3LL2TP.cjs.map