"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUpdateInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUpdateInputSchema_default = GoogleCalendarAuthUpdateInputSchema;




exports.GoogleCalendarAuthUpdateInputSchema = GoogleCalendarAuthUpdateInputSchema; exports.GoogleCalendarAuthUpdateInputSchema_default = GoogleCalendarAuthUpdateInputSchema_default;
//# sourceMappingURL=chunk-QY4M5Y6K.cjs.map