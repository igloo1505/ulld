"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinList: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema;




exports.KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema = KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema; exports.KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-5XFTZDAZ.cjs.map