"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var KanBanCardUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  listId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUncheckedUpdateInputSchema_default = KanBanCardUncheckedUpdateInputSchema;




exports.KanBanCardUncheckedUpdateInputSchema = KanBanCardUncheckedUpdateInputSchema; exports.KanBanCardUncheckedUpdateInputSchema_default = KanBanCardUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-4MX2EH5W.cjs.map