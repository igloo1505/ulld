"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI5K7MFTPcjs = require('./chunk-I5K7MFTP.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var CitationsGroupUncheckedUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  entries: _zod.z.lazy(() => _chunkI5K7MFTPcjs.BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
var CitationsGroupUncheckedUpdateInputSchema_default = CitationsGroupUncheckedUpdateInputSchema;




exports.CitationsGroupUncheckedUpdateInputSchema = CitationsGroupUncheckedUpdateInputSchema; exports.CitationsGroupUncheckedUpdateInputSchema_default = CitationsGroupUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-QXYA2CYL.cjs.map