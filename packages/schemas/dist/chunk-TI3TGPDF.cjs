"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedUpdateManyInputSchema_default = GoogleCalendarAuthUncheckedUpdateManyInputSchema;




exports.GoogleCalendarAuthUncheckedUpdateManyInputSchema = GoogleCalendarAuthUncheckedUpdateManyInputSchema; exports.GoogleCalendarAuthUncheckedUpdateManyInputSchema_default = GoogleCalendarAuthUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-TI3TGPDF.cjs.map