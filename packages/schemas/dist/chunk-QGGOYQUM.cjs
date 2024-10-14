"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3OXWRUXPcjs = require('./chunk-3OXWRUXP.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  entries: _zod.z.lazy(() => _chunk3OXWRUXPcjs.BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
var CitationsGroupUpdateInputSchema_default = CitationsGroupUpdateInputSchema;




exports.CitationsGroupUpdateInputSchema = CitationsGroupUpdateInputSchema; exports.CitationsGroupUpdateInputSchema_default = CitationsGroupUpdateInputSchema_default;
//# sourceMappingURL=chunk-QGGOYQUM.cjs.map