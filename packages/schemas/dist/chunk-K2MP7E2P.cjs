"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/NoteTypeUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var NoteTypeUncheckedUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUncheckedUpdateInputSchema_default = NoteTypeUncheckedUpdateInputSchema;




exports.NoteTypeUncheckedUpdateInputSchema = NoteTypeUncheckedUpdateInputSchema; exports.NoteTypeUncheckedUpdateInputSchema_default = NoteTypeUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-K2MP7E2P.cjs.map