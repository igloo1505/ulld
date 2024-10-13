"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUpdateInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUpdateInputSchema_default = GoogleCalendarAuthUpdateInputSchema;




exports.GoogleCalendarAuthUpdateInputSchema = GoogleCalendarAuthUpdateInputSchema; exports.GoogleCalendarAuthUpdateInputSchema_default = GoogleCalendarAuthUpdateInputSchema_default;
//# sourceMappingURL=chunk-TGC76B2Z.cjs.map