"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IFISXKcjs = require('./chunk-75IFISXK.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunk75IFISXKcjs.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUncheckedUpdateInputSchema_default = KanBanListUncheckedUpdateInputSchema;




exports.KanBanListUncheckedUpdateInputSchema = KanBanListUncheckedUpdateInputSchema; exports.KanBanListUncheckedUpdateInputSchema_default = KanBanListUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-FIPD7SS3.cjs.map