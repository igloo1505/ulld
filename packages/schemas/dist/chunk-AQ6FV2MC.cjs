"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateManyWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedUpdateManyWithoutKanbanInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateManyWithoutKanbanInputSchema;




exports.KanBanListUncheckedUpdateManyWithoutKanbanInputSchema = KanBanListUncheckedUpdateManyWithoutKanbanInputSchema; exports.KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-AQ6FV2MC.cjs.map