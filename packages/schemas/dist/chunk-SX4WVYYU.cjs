"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDURBXSYVcjs = require('./chunk-DURBXSYV.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/KanBanCardUpdateInputSchema.ts
var _zod = require('zod');
var KanBanCardUpdateInputSchema = _zod.z.object({
  indexWithinList: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  KanBanList: _zod.z.lazy(() => _chunkDURBXSYVcjs.KanBanListUpdateOneWithoutCardsNestedInputSchema).optional()
}).strict();
var KanBanCardUpdateInputSchema_default = KanBanCardUpdateInputSchema;




exports.KanBanCardUpdateInputSchema = KanBanCardUpdateInputSchema; exports.KanBanCardUpdateInputSchema_default = KanBanCardUpdateInputSchema_default;
//# sourceMappingURL=chunk-SX4WVYYU.cjs.map