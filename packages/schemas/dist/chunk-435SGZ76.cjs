"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateWithoutEntriesInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var CitationsGroupUpdateWithoutEntriesInputSchema_default = CitationsGroupUpdateWithoutEntriesInputSchema;




exports.CitationsGroupUpdateWithoutEntriesInputSchema = CitationsGroupUpdateWithoutEntriesInputSchema; exports.CitationsGroupUpdateWithoutEntriesInputSchema_default = CitationsGroupUpdateWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-435SGZ76.cjs.map