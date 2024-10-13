"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateManyWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedUpdateManyWithoutKanbanInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateManyWithoutKanbanInputSchema;




exports.KanBanListUncheckedUpdateManyWithoutKanbanInputSchema = KanBanListUncheckedUpdateManyWithoutKanbanInputSchema; exports.KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-HBOE5I7T.cjs.map