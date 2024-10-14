"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQURZBTO7cjs = require('./chunk-QURZBTO7.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateWithoutDietInputSchema = _zod.z.object({
  start: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUpdateWithoutDietInputSchema_default = TimePeriodUpdateWithoutDietInputSchema;




exports.TimePeriodUpdateWithoutDietInputSchema = TimePeriodUpdateWithoutDietInputSchema; exports.TimePeriodUpdateWithoutDietInputSchema_default = TimePeriodUpdateWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-4LN73IFR.cjs.map