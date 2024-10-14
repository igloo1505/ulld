"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4ICNCPPFcjs = require('./chunk-4ICNCPPF.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var CitationsGroupUncheckedUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  entries: _zod.z.lazy(() => _chunk4ICNCPPFcjs.BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
var CitationsGroupUncheckedUpdateInputSchema_default = CitationsGroupUncheckedUpdateInputSchema;




exports.CitationsGroupUncheckedUpdateInputSchema = CitationsGroupUncheckedUpdateInputSchema; exports.CitationsGroupUncheckedUpdateInputSchema_default = CitationsGroupUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-I5EUBDIF.cjs.map