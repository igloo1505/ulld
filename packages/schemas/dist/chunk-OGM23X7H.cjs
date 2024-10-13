"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanCardUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var KanBanCardUpdateManyMutationInputSchema = _zod.z.object({
  indexWithinList: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUpdateManyMutationInputSchema_default = KanBanCardUpdateManyMutationInputSchema;




exports.KanBanCardUpdateManyMutationInputSchema = KanBanCardUpdateManyMutationInputSchema; exports.KanBanCardUpdateManyMutationInputSchema_default = KanBanCardUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-OGM23X7H.cjs.map