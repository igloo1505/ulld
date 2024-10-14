"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedUpdateInputSchema_default = GoogleCalendarAuthUncheckedUpdateInputSchema;




exports.GoogleCalendarAuthUncheckedUpdateInputSchema = GoogleCalendarAuthUncheckedUpdateInputSchema; exports.GoogleCalendarAuthUncheckedUpdateInputSchema_default = GoogleCalendarAuthUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-ZIMNRZU5.cjs.map