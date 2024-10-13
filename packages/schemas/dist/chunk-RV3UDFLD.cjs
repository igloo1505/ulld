"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLQQ43QUScjs = require('./chunk-LQQ43QUS.cjs');


var _chunk3UWO433Xcjs = require('./chunk-3UWO433X.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunk3UWO433Xcjs.KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkLQQ43QUScjs.KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
var KanBanListUpdateInputSchema_default = KanBanListUpdateInputSchema;




exports.KanBanListUpdateInputSchema = KanBanListUpdateInputSchema; exports.KanBanListUpdateInputSchema_default = KanBanListUpdateInputSchema_default;
//# sourceMappingURL=chunk-RV3UDFLD.cjs.map