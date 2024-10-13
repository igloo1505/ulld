"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWZYXQ6XZcjs = require('./chunk-WZYXQ6XZ.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  entries: _zod.z.lazy(() => _chunkWZYXQ6XZcjs.BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
var CitationsGroupUpdateInputSchema_default = CitationsGroupUpdateInputSchema;




exports.CitationsGroupUpdateInputSchema = CitationsGroupUpdateInputSchema; exports.CitationsGroupUpdateInputSchema_default = CitationsGroupUpdateInputSchema_default;
//# sourceMappingURL=chunk-ELMLDSIX.cjs.map