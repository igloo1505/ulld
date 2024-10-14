"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQURZBTO7cjs = require('./chunk-QURZBTO7.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateManyWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUncheckedUpdateManyWithoutDietInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  start: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default = TimePeriodUncheckedUpdateManyWithoutDietInputSchema;




exports.TimePeriodUncheckedUpdateManyWithoutDietInputSchema = TimePeriodUncheckedUpdateManyWithoutDietInputSchema; exports.TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default = TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-46C6GPUA.cjs.map