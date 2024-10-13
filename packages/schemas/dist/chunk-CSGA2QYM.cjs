"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IFISXKcjs = require('./chunk-75IFISXK.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedUpdateWithoutKanbanInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunk75IFISXKcjs.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUncheckedUpdateWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateWithoutKanbanInputSchema;




exports.KanBanListUncheckedUpdateWithoutKanbanInputSchema = KanBanListUncheckedUpdateWithoutKanbanInputSchema; exports.KanBanListUncheckedUpdateWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-CSGA2QYM.cjs.map