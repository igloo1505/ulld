"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/NoteTypeUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var NoteTypeUncheckedUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUncheckedUpdateInputSchema_default = NoteTypeUncheckedUpdateInputSchema;




exports.NoteTypeUncheckedUpdateInputSchema = NoteTypeUncheckedUpdateInputSchema; exports.NoteTypeUncheckedUpdateInputSchema_default = NoteTypeUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-LDHHS452.cjs.map