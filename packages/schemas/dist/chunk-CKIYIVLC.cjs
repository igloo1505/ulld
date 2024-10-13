"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIAGBENOUcjs = require('./chunk-IAGBENOU.cjs');


var _chunk3A457F5Ucjs = require('./chunk-3A457F5U.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateInputSchema = _zod.z.object({
  start: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk3A457F5Ucjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  Diet: _zod.z.lazy(() => _chunkIAGBENOUcjs.DietUpdateOneWithoutPeriodsFollowedNestedInputSchema).optional()
}).strict();
var TimePeriodUpdateInputSchema_default = TimePeriodUpdateInputSchema;




exports.TimePeriodUpdateInputSchema = TimePeriodUpdateInputSchema; exports.TimePeriodUpdateInputSchema_default = TimePeriodUpdateInputSchema_default;
//# sourceMappingURL=chunk-CKIYIVLC.cjs.map