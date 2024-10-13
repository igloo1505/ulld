"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3A457F5Ucjs = require('./chunk-3A457F5U.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateManyWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUncheckedUpdateManyWithoutDietInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  start: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk3A457F5Ucjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default = TimePeriodUncheckedUpdateManyWithoutDietInputSchema;




exports.TimePeriodUncheckedUpdateManyWithoutDietInputSchema = TimePeriodUncheckedUpdateManyWithoutDietInputSchema; exports.TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default = TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-SAPTKDBN.cjs.map