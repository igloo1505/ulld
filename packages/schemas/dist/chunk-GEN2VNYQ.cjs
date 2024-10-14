"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUpdateManyMutationInputSchema_default = GoogleCalendarAuthUpdateManyMutationInputSchema;




exports.GoogleCalendarAuthUpdateManyMutationInputSchema = GoogleCalendarAuthUpdateManyMutationInputSchema; exports.GoogleCalendarAuthUpdateManyMutationInputSchema_default = GoogleCalendarAuthUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-GEN2VNYQ.cjs.map