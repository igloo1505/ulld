"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedUpdateInputSchema_default = GoogleCalendarAuthUncheckedUpdateInputSchema;




exports.GoogleCalendarAuthUncheckedUpdateInputSchema = GoogleCalendarAuthUncheckedUpdateInputSchema; exports.GoogleCalendarAuthUncheckedUpdateInputSchema_default = GoogleCalendarAuthUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-PRQLXWPV.cjs.map