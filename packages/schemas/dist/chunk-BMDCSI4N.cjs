"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedUpdateManyInputSchema_default = GoogleCalendarAuthUncheckedUpdateManyInputSchema;




exports.GoogleCalendarAuthUncheckedUpdateManyInputSchema = GoogleCalendarAuthUncheckedUpdateManyInputSchema; exports.GoogleCalendarAuthUncheckedUpdateManyInputSchema_default = GoogleCalendarAuthUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-BMDCSI4N.cjs.map