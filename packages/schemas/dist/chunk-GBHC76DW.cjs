"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUpdateManyMutationInputSchema_default = GoogleCalendarAuthUpdateManyMutationInputSchema;




exports.GoogleCalendarAuthUpdateManyMutationInputSchema = GoogleCalendarAuthUpdateManyMutationInputSchema; exports.GoogleCalendarAuthUpdateManyMutationInputSchema_default = GoogleCalendarAuthUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-GBHC76DW.cjs.map