"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TimePeriodCreateManyInputSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  start: _zod.z.coerce.date().optional(),
  end: _zod.z.coerce.date().optional().nullable(),
  dietId: _zod.z.string().optional().nullable()
}).strict();
var TimePeriodCreateManyInputSchema_default = TimePeriodCreateManyInputSchema;




exports.TimePeriodCreateManyInputSchema = TimePeriodCreateManyInputSchema; exports.TimePeriodCreateManyInputSchema_default = TimePeriodCreateManyInputSchema_default;
//# sourceMappingURL=chunk-ESLTZPEB.cjs.map