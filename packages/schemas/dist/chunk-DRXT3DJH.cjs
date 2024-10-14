"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDCCSZ6PKcjs = require('./chunk-DCCSZ6PK.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanCardUpdateInputSchema.ts
var _zod = require('zod');
var KanBanCardUpdateInputSchema = _zod.z.object({
  indexWithinList: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  KanBanList: _zod.z.lazy(() => _chunkDCCSZ6PKcjs.KanBanListUpdateOneWithoutCardsNestedInputSchema).optional()
}).strict();
var KanBanCardUpdateInputSchema_default = KanBanCardUpdateInputSchema;




exports.KanBanCardUpdateInputSchema = KanBanCardUpdateInputSchema; exports.KanBanCardUpdateInputSchema_default = KanBanCardUpdateInputSchema_default;
//# sourceMappingURL=chunk-DRXT3DJH.cjs.map