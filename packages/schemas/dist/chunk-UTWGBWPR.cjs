"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNMTEPXEScjs = require('./chunk-NMTEPXES.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunkNMTEPXEScjs.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUncheckedUpdateInputSchema_default = KanBanListUncheckedUpdateInputSchema;




exports.KanBanListUncheckedUpdateInputSchema = KanBanListUncheckedUpdateInputSchema; exports.KanBanListUncheckedUpdateInputSchema_default = KanBanListUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-UTWGBWPR.cjs.map