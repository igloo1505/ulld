"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateManyMutationInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanListUpdateManyMutationInputSchema_default = KanBanListUpdateManyMutationInputSchema;




exports.KanBanListUpdateManyMutationInputSchema = KanBanListUpdateManyMutationInputSchema; exports.KanBanListUpdateManyMutationInputSchema_default = KanBanListUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-ZCQDI3SR.cjs.map