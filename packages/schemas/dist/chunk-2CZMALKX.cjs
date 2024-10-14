"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQURZBTO7cjs = require('./chunk-QURZBTO7.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var TimePeriodUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  start: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUncheckedUpdateInputSchema_default = TimePeriodUncheckedUpdateInputSchema;




exports.TimePeriodUncheckedUpdateInputSchema = TimePeriodUncheckedUpdateInputSchema; exports.TimePeriodUncheckedUpdateInputSchema_default = TimePeriodUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-2CZMALKX.cjs.map