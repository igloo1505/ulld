"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNMTEPXEScjs = require('./chunk-NMTEPXES.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedUpdateWithoutKanbanInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunkNMTEPXEScjs.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUncheckedUpdateWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateWithoutKanbanInputSchema;




exports.KanBanListUncheckedUpdateWithoutKanbanInputSchema = KanBanListUncheckedUpdateWithoutKanbanInputSchema; exports.KanBanListUncheckedUpdateWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-MVJIKWWQ.cjs.map