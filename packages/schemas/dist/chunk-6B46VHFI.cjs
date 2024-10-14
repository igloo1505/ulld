"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEPH6L2T7cjs = require('./chunk-EPH6L2T7.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateWithoutCardsInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  Kanban: _zod.z.lazy(() => _chunkEPH6L2T7cjs.KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
var KanBanListUpdateWithoutCardsInputSchema_default = KanBanListUpdateWithoutCardsInputSchema;




exports.KanBanListUpdateWithoutCardsInputSchema = KanBanListUpdateWithoutCardsInputSchema; exports.KanBanListUpdateWithoutCardsInputSchema_default = KanBanListUpdateWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-6B46VHFI.cjs.map