"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3A457F5Ucjs = require('./chunk-3A457F5U.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateWithoutDietInputSchema = _zod.z.object({
  start: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk3A457F5Ucjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUpdateWithoutDietInputSchema_default = TimePeriodUpdateWithoutDietInputSchema;




exports.TimePeriodUpdateWithoutDietInputSchema = TimePeriodUpdateWithoutDietInputSchema; exports.TimePeriodUpdateWithoutDietInputSchema_default = TimePeriodUpdateWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-VVJ2HNY3.cjs.map