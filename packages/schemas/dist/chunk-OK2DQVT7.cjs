"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema_default = CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema;




exports.CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema = CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema; exports.CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema_default = CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-OK2DQVT7.cjs.map