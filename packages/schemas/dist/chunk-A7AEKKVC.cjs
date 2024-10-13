"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLQQ43QUScjs = require('./chunk-LQQ43QUS.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateWithoutCardsInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  Kanban: _zod.z.lazy(() => _chunkLQQ43QUScjs.KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
var KanBanListUpdateWithoutCardsInputSchema_default = KanBanListUpdateWithoutCardsInputSchema;




exports.KanBanListUpdateWithoutCardsInputSchema = KanBanListUpdateWithoutCardsInputSchema; exports.KanBanListUpdateWithoutCardsInputSchema_default = KanBanListUpdateWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-A7AEKKVC.cjs.map