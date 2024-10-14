"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUncheckedUpdateWithoutKanBanListInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinList: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUncheckedUpdateWithoutKanBanListInputSchema_default = KanBanCardUncheckedUpdateWithoutKanBanListInputSchema;




exports.KanBanCardUncheckedUpdateWithoutKanBanListInputSchema = KanBanCardUncheckedUpdateWithoutKanBanListInputSchema; exports.KanBanCardUncheckedUpdateWithoutKanBanListInputSchema_default = KanBanCardUncheckedUpdateWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-WUSGPU4N.cjs.map