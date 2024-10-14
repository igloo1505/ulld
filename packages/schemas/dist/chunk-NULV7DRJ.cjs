"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVN55TC5Gcjs = require('./chunk-VN55TC5G.cjs');


var _chunkQURZBTO7cjs = require('./chunk-QURZBTO7.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateInputSchema = _zod.z.object({
  start: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  Diet: _zod.z.lazy(() => _chunkVN55TC5Gcjs.DietUpdateOneWithoutPeriodsFollowedNestedInputSchema).optional()
}).strict();
var TimePeriodUpdateInputSchema_default = TimePeriodUpdateInputSchema;




exports.TimePeriodUpdateInputSchema = TimePeriodUpdateInputSchema; exports.TimePeriodUpdateInputSchema_default = TimePeriodUpdateInputSchema_default;
//# sourceMappingURL=chunk-NULV7DRJ.cjs.map